<template>
  <div id="app">
    <Nav1 v-on:clicked="setState3" />
    <Body v-if="state==0" />
    <List v-if="state==1" v-on:clicked="setState2" :realList="list" />
    <Detail v-if="state==2" :input="id" />
    <WaitingList  v-if="state==3" v-on:clicked="setState3"  v-bind:arr="list" />
    <Signup v-if="state==4" v-on:clicked="setState4" />
    <Edit v-if="state==5"  />
    <Database v-if="state==6"  />
    <Information v-if="state==11" />
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      state: 0,
      id: 0,
      sort: 0,
      list: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    setState(value) {
      this.state = value;
            this.fetchData();
    },
    setState2(value) {
      this.state = value[0];
      this.id = value[1];
            this.fetchData();
    },
    setState3(value) {
      this.state = value[0];
      this.sort = value[1];
      this.fetchData();
    },
    async fetchData() {
      const self = this;
      var links = "http://localhost:3000/api/PurchasedItem";
      if (this.sort === 0)
        links = "http://localhost:3000/api/PurchasedItem/promotion";
      if (this.sort === 1)
        links = "http://localhost:3000/api/PurchasedItem/TopView";
      if (this.sort === 2)
        links = "http://localhost:3000/api/PurchasedItem/Topsale";
      if (this.sort === 3)
        links = "http://localhost:3000/api/PurchasedItem/type/1";
      if (this.sort === 4)
        links = "http://localhost:3000/api/PurchasedItem/type/2";
      if (this.sort === 5)
        links = "http://localhost:3000/api/PurchasedItem/type/3";
      if (this.sort === 6)
        links = "http://localhost:3000/api/PurchasedItem/type/4";
      return await axios
        .get(links)
        .then(response => response.data)
        .then(data => {
          self.list = data;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
