import EasyDemo from "./easyVersion";
import CompletedDemo from "./completedVersion";
function App() {
  return (
    <>
      <fieldset>
        <legend>简单版</legend>
        <p><em>存在的问题：增加age字段的时候，只是依赖了name字段的NameLabel组件也会执行</em></p>
        <EasyDemo />
      </fieldset>
      <fieldset>
        <legend>完整版(性能优化)</legend>
        <CompletedDemo />
      </fieldset>
    </>
  );
}

export default App;
