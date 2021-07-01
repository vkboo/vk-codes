<template>
  <div>
      <h1>这里是About</h1>
      <fieldset>
        <legend>列表1</legend>
        <ul>
          <li v-for="item of list1"
          :key="item.id">
          {{item.body}}
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>列表2</legend>
        <ul>
          <li v-for="item of list2"
          :key="item.id">
          {{item.body}}
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>列表3</legend>
        <ul>
          <li v-for="item of list2"
          :key="item.id">
          {{item.body}}
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
      const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/comments',
        params,
      });
      const list = res.data;
      return list.slice(0, 20);
    },
  }
}
</script>