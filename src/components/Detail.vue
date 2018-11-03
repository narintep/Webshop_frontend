
<template>
  <div class="hello">
    <div class="mar" v-for="(i,index) in realList"  :key="index">
    <div v-if="input==i.id">
    <b-row>
      <b-col>
        <b-card width="10" heigt="10">
          <img :src="require('./candle/'+i.candle_type.name+'/'+i.size_id+'.png')"  width="500" heigt="500"/>
        </b-card>
      </b-col>
      <b-col>
        <h1>General candle</h1>
        <b-row>
          <!-- <b-col> -->
            <!-- <p>size:</p> -->
          <!-- </b-col> -->
            <b-col>
              <b-form-group id="exampleInputGroup3" label="Size:" label-for="exampleInput3">
              <b-form-select id="exampleInput3" :options="size" required v-model="size_select">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <p>number:</p>
            <b-input type="number" min="1" v-model="number" required placeholder="Enter value">
            </b-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="exampleInputGroup3" label="Smell 1:" label-for="exampleInput3">
              <b-form-select id="exampleInput3" :options="smell" required v-model="smell1">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="exampleInputGroup3" label="Smell 2:" label-for="exampleInput3">
              <b-form-select id="exampleInput3" :options="smell" required v-model="smell2">
              </b-form-select>
            </b-form-group>

          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>TotalPrice:{{number*(smell1+smell2+size_select)}}$</p>
          </b-col>
          <b-col>
            <b-button variant="primary" v-on:click="Buy">Buy</b-button>
          </b-col>
        </b-row>
      </b-col>

    </b-row>
    </div>
    </div>
  </div>
</template>
<style>
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
<script>
const _ = require('lodash');
var arr2 = [];
var arr3=[];
var arr4=[];

fetch("http://localhost:3000/api/size")
        .then(function(data) {
          return data.json();
        })
        .then(function(json) {
          // console.log(json);
          // arr2 = json;
          return json;
        }).then(function(data){
          arr4=_.map(data, item => {
         return {
        value: item.price_per_size,
        text: item.name,
    }
     });
        });

fetch("http://localhost:3000/api/smell")
        .then(function(data) {
          return data.json();
        })
        .then(function(json) {
          // console.log(json);
          // arr2 = json;
          return json;
        }).then(function(data){
          arr3=_.map(data, item => {
         return {
        value: item.cost,
        text: item.name,
    }
     });
        });

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
      input: Number
    },
    data() {
      return {
        smell1: 0,
        smell2: 0,
        number: 1,
        realList2:arr2,
         realList:arr,
        smell: arr3,
        show: true,
        size:arr4,
        size_select:50,
      };
    },
    methods: {
      Buy() {
        alert(this.smell1)
      }
    }
  };
</script>
