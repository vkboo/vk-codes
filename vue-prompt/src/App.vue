<template>
  <div id="app">
    <button @click="handleClk">点击弹出Prompt(方式一)</button>
    <button @click="handleClk2">点击弹出Prompt(方式二)</button>
  </div>
</template>

<script>
import prompt from "@/components/Prompt/prompt";
export default {
  name: "App",
  methods: {
    handleClk() {
      this.$prompt("这里是语句？", {
        onOk() {
          console.log("点击了ok");
        },
        onCancel() {
          console.log("点击了cancel");
        },
      });
    },
    handleClk2() {
      prompt("这里是语句(方式2的调用)？", {
        onOk() {
          console.log("点击了ok(方式2的调用)");
        },
        onCancel() {
          console.log("点击了cancel(方式2的调用)");
        },
      });
    },
  },
};
</script>