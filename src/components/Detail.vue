<template>
  <div class="hello">
    <b-row>
      <b-col>
        <b-card img-alt="Image" img-top tag="article" style="margin-left:25px;margin-top:25px;" class="mb-2">
          <img :src="require('./../assets/candle_img/'+'1'+'.png')">
        </b-card>
      </b-col>
      <b-col>
        <h1>General candle</h1>
        <b-row>
          <b-col>
            <p>size:</p>
          </b-col>
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
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      input: String
    },
    data() {
      return {
        smell1: null,
        smell2: null,
        number: null,
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