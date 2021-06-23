# Context API + Hooks 实现数据状态管理

## 数据状态管理的整体API设计

```jsx

const state = {
    name: 'vk',
    age: 12,
}

const App = () => {
    return <DataContext.Provider>
        <AModule />
    </DataContext.Provider>
}

import {useStore, setStore} from 'useMyCustomStore';
const AModule = () => {
    return <>
    </>
}
```