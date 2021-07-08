const HOOKS = []; // 全局的存储 hook 的变量
let currentIndex = 0; // 全局的 依赖 hook 执行顺序的下标
// useState
function useState(initialState) {
    HOOKS[currentIndex] = HOOKS[currentIndex]
        || (typeof initialState === 'function' ? initialState() : initialState);
    const memoryCurrentIndex = currentIndex; // currentIndex 是全局可变的，需要保存本次的
    const setState = p => {
        let newState = p;
        // setCount(count => count + 1)  判断这种用法
        if (typeof p === 'function') newState = p(HOOKS[memoryCurrentIndex]);
        // 如果设置前后的值一样，就不更新了
        if (newState === HOOKS[memoryCurrentIndex]) return;
        Tick.nextTick(() => {
            HOOKS[memoryCurrentIndex] = newState;
        });
    };
    return [HOOKS[currentIndex++], setState];
}


// Tick
const Tick = {
    render: null,
    queue: [],
    push: function (task) {
        this.queue.push(task);
    },
    nextTick: function (update) {
        this.push(update);
        Promise.resolve(() => {
            if (this.queue.length) { // 一次循环后，全部出栈，确保单次事件循环不会重复渲染
                this.queue.forEach(f => f()); // 依次执行队列中所有任务
                currentIndex = 0; // 重置计数
                this.queue = []; // 清空队列
                this.render && this.render(); // 更新dom
            }
        }).then(f => f());
    }
};

// useEffect
function useEffect(fn, deps) {
    const hook = HOOKS[currentIndex];
    const _deps = hook && hook._deps;
    // 判断是否传了依赖，没传默认每次更新
    // 判断本次依赖和上次的是否全部一样
    const hasChange = _deps ? !deps.every((v, i) => _deps[i] === v) : true;
    const memoryCurrentIndex = currentIndex; // currentIndex 是全局可变的
    if (hasChange) {
        const _effect = hook && hook._effect;
        setTimeout(() => {
            // 每次先判断一下有没有上一次的副作用需要卸载
            typeof _effect === 'function' && _effect();
            // 执行本次的
            const ef = fn();
            // 更新effects
            HOOKS[memoryCurrentIndex] = { ...HOOKS[memoryCurrentIndex], _effect: ef };
        })
    }
    // 更新依赖
    HOOKS[currentIndex++] = { _deps: deps, _effect: null };
}

// useReducer
function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);
    const update = (state, action) => {
        const result = reducer(state, action);
        setState(result);
    }
    const dispatch = update.bind(null, state);
    return [state, dispatch];
}

// useMemo
function useMemo(fn, deps) {
    const hook = HOOKS[currentIndex];
    const _deps = hook && hook._deps;
    const hasChange = _deps ? !deps.every((v, i) => _deps[i] === v) : true;
    const memo = hasChange ? fn() : hook.memo;
    HOOKS[currentIndex++] = { _deps: deps, memo };
    return memo;
}

// useCallback
function useCallback(fn, deps) {
    return useMemo(() => fn, deps);
}

// 使用
function render() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const time = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)
        // 清除副作用
        return () => {
            clearInterval(time);
        }
    }, [count]);
    document.querySelector('.add').onclick = () => {
        setCount(count + 1);
    };

    document.querySelector('#count').innerHTML = count;
}
// 绑定 render
Tick.render = render;
render();

