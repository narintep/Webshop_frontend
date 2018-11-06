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
    },
    setState2(value) {
      this.state = value[0];
      this.id = value[1];
    },
    setState3(value) {
      this.state = value[0];
      this.sort = value[1];
      this.fetchData();
    },
    fetchData() {
      const self = this;
      var arr = [];
      var links = "http://localhost:3000/api/PurchasedItem";
      if (this.sort === 0)
        links = "http://localhost:3000/api/PurchasedItem/promotion";
      if (this.sort === 1)
        links = "http://localhost:3000/api/PurchasedItem/TopView";
      return axios
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
