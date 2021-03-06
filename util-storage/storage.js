const MAX_MEMORTY_VALUE_LENGTH = 300;

/* eslint-disable */
const __NAMESPACE__ = 'default'; // 默认值
let _store = window.localStorage;

let _prefix = `__ta/${__NAMESPACE__}_`;
const _cache = {};
window._cache = _cache;
let storage;

try {
  // IE 8 或移动端的隐身模式 下直接调用 window.localStorage 会报错（其实也不用支持 IE8）
  _store.setItem('bs_:)_', '__');
  _store.removeItem('bs_:)_');
} catch (e) {
  /* istanbul ignore next */
  _store = null;
}

if (_store) {
  storage = {
    // 同时更新不同的 Product 下的 storage
    map(products, fn) {
      const lastPrefix = _prefix;
      products.forEach(product => {
        _prefix = `__ta/${product}_`;
        fn(product, {
          set: this.set,
          get: this.get,
          has: this.has,
          del: this.del,
        });
      });
      _prefix = lastPrefix;
    },
    set(key, val, seconds) {
      const expiredAt = seconds ? Date.now() + seconds * 1000 : 0;
      val = JSON.stringify([val, expiredAt]);
      if (val.length <= MAX_MEMORTY_VALUE_LENGTH) _cache[_prefix + key] = val;
      else delete _cache[_prefix + key];
      _store.setItem(_prefix + key, val);
    },

    get(key, defaultValue) {
      const rawVal = _cache[_prefix + key] || _store.getItem(_prefix + key);
      if (!rawVal) return defaultValue;

      try {
        const [val, expiredAt] = JSON.parse(rawVal);
        if (expiredAt && Date.now() > expiredAt) {
          return defaultValue;
        }
        return val;
      } catch (e) {
        return defaultValue;
      }
    },

    del(key) {
      delete _cache[_prefix + key];
      _store.removeItem(_prefix + key);
    },

    has(key) {
      return (_prefix + key) in _cache || !!_store.getItem(_prefix + key);
    },
  };
} else {
  storage = {
    set(key, val) {
      _cache[_prefix + key] = val;
    },
    get(key) {
      return _cache[_prefix + key];
    },
    del(key) {
      delete _cache[_prefix + key];
    },
    has(key) {
      return (_prefix + key) in _cache;
    },
  };
}

export { storage as default };
