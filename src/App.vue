<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav1 v-on:clicked="setState" />
    <Body v-if="state==0" />
    <List v-if="state==1" v-on:clicked="setState" v-bind:arr="list" />
    <Detail v-if="state==2" input="" />
    <!-- <Nav2 /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// console.log(this.List)
export default {
  name: "app",
  data() {
    return {
      state: 0,
      list: this.fetchData()
    };
  },
  methods: {
    setState(value) {
      this.state = value;
    },
    fetchData() {
      var arr = [];
      fetch("http://localhost:3000/api/artists")
        .then(function(data) {
          return data.json();
        })
        .then(function(json) {
          // console.log(json);
          arr = json;
        });
        return arr;
    }
  },
  mounted() {
    this.fetchData();
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
