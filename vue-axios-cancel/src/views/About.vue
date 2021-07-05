<template>
  <div>
      <h1>这里是About</h1>
      <fieldset>
        <legend>列表1(切换tab,接口url相同，但是params不同的情况)</legend>
        <button 
          :class="{on: activeType === 'A'}" 
          @click="onClickA">
          TabA
        </button>
        <button 
          :class="{on: activeType === 'B'}" 
          @click="onClickB">
          TabB
        </button>
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
      activeType: 'A',
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
    onClickA () {
      this.activeType = 'A';
      this.init1('A');
    },
    onClickB () {
      this.activeType = 'B';
      this.init1('B');
    },
    async init1 (type = 'A') {
      const list = await this.reqList({type}, {
        cancelPrint: 'tab-list-req',
      });
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
    async reqList (params, rest = {}) {
      const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/comments',
        params,
        ...rest,
      });
      const list = res.data;
      return list.slice(0, 20);
    },
  }
}
</script>

<style scoped>
.on {
  background: #999;
  color: #FFF;
  pointer-events: none;
}
</style>