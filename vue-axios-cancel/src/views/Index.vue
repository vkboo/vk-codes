<template>
  <div>
      <h1>这里是Index</h1>
      <button @click="init1">请求列表1(快速点击的重复请求)</button>
      <fieldset>
        <legend>列表1</legend>
        <ul>
          <li v-for="item of list1"
          :key="item.id">
          {{item.title}}
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>列表2</legend>
        <ul>
          <li v-for="item of list2"
          :key="item.id">
          {{item.title}}
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>列表3</legend>
        <ul>
          <li v-for="item of list2"
          :key="item.id">
          {{item.title}}
          </li>
        </ul>
      </fieldset>
  </div>
</template>

<script>
import axios from '@/utils/request'
export default {
  name: 'Index',
  data () {
    return {
      list1: [],
      list2: [],
      list3: [],
    };
  },
  created () {
    this.init1();
    this.init2();
    this.init3();
  },
  methods: {
    async init1 () {
      const list = await this.reqList({type: 1});
      this.list1 = list;
    },
    async init2 () {
      const list = await this.reqList({type: 2});
      this.list2 = list;
    },
    async init3 () {
      const list = await this.reqList({type: 3});
      this.list3 = list;
    },
    async reqList (params) {
      try {
        const res = await axios({
          url: 'https://jsonplaceholder.typicode.com/todos',
          params,
        });
        const list = res.data;
        return list.slice(0, 20);
      } catch (err) {
          if (err.errcode !== 0) {
            console.warn(err)
          }
      }
    },
  }
}
</script>