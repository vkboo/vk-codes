<template>
  <div id="app">
    <button @click="incrementAsync">
      <v-wait for="incrementing">
        <template slot="waiting">
          <span class="animated">+loading+</span>
        </template>
        <code>mapWaitingActions</code> {{ count }}
      </v-wait>
    </button>
    <!-- <span v-if="isIncrementing">is incrementing...</span> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapWaitingActions, mapWaitingGetters } from "vue-wait";

export default {
  name: "vuex-app",
  computed: {
    ...mapGetters(["count"]),
    // ...mapWaitingGetters({
    //   isIncrementing: "incrementing count",
    // }),
  },
  methods: {
    ...mapWaitingActions({
      incrementAsync: {
        action: 'incrementAsync',
        loader: 'incrementing',
      }
      // incrementAsync: "incrementing count",
    }),
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

#app {
  margin: 50px auto;
  width: 500px;
  text-align: center;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  display: inline-block;
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  border: 2px solid #ccc;
  line-height: 30px;
}

.container {
  padding: 50px;
}

.progress {
  width: 400px;
  height: 40px;
  background-color: #ccc;
  border: 1px solid #999;
  margin: 0 auto;
  display: inline-block;
  position: relative;
}

.percent {
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  background-color: blue;
  transition-duration: 600ms;
}

button {
  border: 0;
  background-color: #fff;
  border: 2px solid #9f0fa0;
  border-radius: 4px;
  margin: 5px;
  color: #9f0fa0;
  font-size: 16px;
  padding: 8px;
}

button[disabled] {
  opacity: 0.4;
}

.animated {
  text-align: center;
  opacity: 0.5;
  animation: pulse 1s infinite;
  animation-delay: 1s;
  display: inline-block;
}

@-webkit-keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
  50% {
    opacity: 0.1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
  50% {
    opacity: 0.1;
    transform: scale(1);
  }
}
</style>
