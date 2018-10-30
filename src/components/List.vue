<template>
  <div class="hello">
      <b-row style="margin-left:25px;">
      <div class="mar" v-for="(i,index) in realList" :key="index">
  <b-card title="Generals Candle"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="mb-2">
          <img :src="require('./../assets/candle_img/'+i.color_id+'.png')">
          
    <p class="card-text">size:{{i.min_weight}} <br>  price:{{i.price}} </p>
    
    <b-button variant="primary" v-on:click="onClick(2)">Detail</b-button>
  </b-card>
</div>
</b-row>
  </div>
</template>
<script>
var arr = [];
fetch("http://localhost:3000/api/PurchasedItem")
        .then(function(data) {
          return data.json();
        })
        .then(function(json) {
          // console.log(json);
          arr = json;
        });
export default {
  name: "HelloWorld",
  props: {
    arr: Array
  },
  data() {
    return {
      realList:arr,
      lists: [
        { color: "blue", id: 1 },
        { color: "red", id: 2 },
        { color: "green", id: 3 },
        { color: "orange", id: 4 },
        { color: "purple", id: 5 },
        { color: "skyblue", id: 6 },
        { color: "white", id: 7 },
        { color: "yellow", id: 8 }
      ]
    };
  },
  methods: {
    onClick(event) {
      this.$emit("clicked", event);
    }
  }
};
</script>
<style>
div.mar {
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 25px;
  margin-left: 25px;
  align-items: center;
}
</style>
