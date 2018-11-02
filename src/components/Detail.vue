
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
          <b-col>
            <p>size:</p>
          </b-col>
          <b-input type="number" v-model2="number" required placeholder="Enter value">
            </b-input>
          <b-col>
            <p>number:</p>
            <b-input type="number" v-model="number" required placeholder="Enter value">
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
            <b-form-group id="exampleInputGroup3" label="Smell 1:" label-for="exampleInput3">
              <b-form-select id="exampleInput3" :options="smell" required v-model="smell2">
              </b-form-select>
            </b-form-group>

          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>Price:13$</p>
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
        smell1: null,
        smell2: null,
        number: null,
         realList:arr,
        smell: [{
            text: "Select One",
            value: null
          },
          {
            text: "Standard",
            value: 1
          },
          "Aromatic",
          "Sporty",
          "Clam"
        ],
        show: true
      };
    },
    methods: {
      Buy() {
        alert(this.smell1 + this.smell2);
      }
    }
  };
</script>
<script>
var arr = [];
fetch("http://localhost:3000/api/expense")
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
      realList: arr
    };
  },
  methods: {
    onClick(event) {
      this.$emit("clicked", event);
    }
  }
};
</script>