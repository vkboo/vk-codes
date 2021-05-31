<template>
  <div class="home">
    <button @click="doRequest">发起请求</button>
    <button @click="setProgress">设置进度</button>
    <hr />
    <button>{{ $wait.any ? "全局loading中" : "default" }}</button>
    <button>
      {{ $wait.is("student-list") ? "student-list在loading中" : "default" }}
    </button>
    <progress min="0" max="100" :value="$wait.percent('downloading')" />
    <!-- template语法 -->
    <!-- <v-wait for="student-list">
      <template #waiting>
        <span>loading^^</span>
      </template>
      <ul>
        <li v-for="(item, index) of list" :key="index">
          {{ item }}
        </li>
      </ul>
    </v-wait> -->
    <!-- v-directive语法 -->
    <span v-wait:visible="'student-list'">loading^^</span>
    <ul v-wait:hidden="'student-list'">
      <li v-for="(item, index) of list" :key="index">
        {{ item }}
      </li>
    </ul>
    <!-- 其它 -->
    <input v-wait:disabled="'*'" placeholder="Username" />
    <button v-wait:click.start="'student-list'">
      start loading student-list
    </button>
    <button v-wait:click.end="'student-list'">end loading student-list</button>
    <hr />
    <!-- 结合vuex -->
    <button @click="$_createUser">创建用户</button>
    <div>
      <v-wait for="wait-user">
        <template #waiting> 正在获取用户信息... </template>
        <p v-if="user.name">用户信息: {{ user.name }}</p>
      </v-wait>
    </div>
    <!-- todo -->
    <hr />
    <!-- waitFor -->
    <button @click="doWaingFromAsync">
      {{ $wait.is("wait-for") ? "loading" : "使用waitFor" }}
    </button>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapWaitingActions, mapWaitingGetters, waitFor } from "vue-wait";
import request from "@/api";
export default {
  name: "home",
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState('aModule', {
      user: (state) => state.user,
    }),
    // 自定义loder的再次映射成computed
    ...mapWaitingGetters({
      xLoader: 'wait-user',
      yLoader: 'wait-for',
    })
  },
  methods: {
    ...mapWaitingActions('aModule',{
      // key: 自定义方法名
      // action: vuex action对应的key
      // loader： 自定义的loader
      // customCreateUser: {
      //   action: "createUser",
      //   loader: "wait-user",
      // },
      // key: vuex action对应的key,也是当前组件对应的方法名,
      // value: 自定义loader
      createUser: 'wait-user'
    }),
    $_createUser() {
      // this.customCreateUser({ name: "vkbo" });
      this.createUser({ name: "vkbo" });
    },
    async doRequest() {
      this.$wait.start("student-list");
      const { list } = await request(1500);
      this.list = list;
      this.$wait.end("student-list");
    },
    setProgress() {
      let count = 0;
      if (this.timer) return clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (count >= 101) {
          return clearInterval(this.timer);
        }
        this.$wait.progress("downloading", count++);
      }, 50);
    },
    doWaingFromAsync: waitFor("wait-for", async function () {
      const delay = (time) =>
        new Promise((resolve) => {
          setTimeout(resolve, time);
        });
      await delay(1000);
      console.log("1000");
    }),
  },
};
</script>
