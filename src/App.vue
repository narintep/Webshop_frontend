<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav1 v-on:clicked="setState" />
    <Body v-if="state==0" />
    <List v-if="state==1" v-on:clicked="setState2"  v-bind:arr="list" />
    <Detail v-if="state==2" :input="id" />
<<<<<<< HEAD
    <WaitingList  v-if="state==3" v-on:clicked="setState3"  v-bind:arr="list" />
=======
    <Signup v-if="state==4" v-on:clicked="setState4" />
>>>>>>> 0deb8dac533079142000f48027ecfd6325b6441f
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
      id:0,
      list: this.fetchData()
    };
  },
  methods: {
    setState(value) {
      this.state = value;
    },setState2(value) {
      this.state = value[0];
      this.id=value[1]
    },
    fetchData() {
      var arr = [];
      fetch("http://localhost:3000/api/PurchasedItem")
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
