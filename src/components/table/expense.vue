<template>

<div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse6 class="m-1">Expense</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse6">
    <b-card>
       <b-table striped hover :items="datas" :fields="fields">
         <template slot="edit" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">
        edit
      </b-button>
    </template>
    <template slot="delete" slot-scope="row">
      <b-button size="sm" variant="danger" class="mr-2"> Delete
      </b-button>

    </template>
<template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
           <b-form-group id="exampleInputGroup1"
                    label="Candle_type_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.candle_type_id"
                      required disabled
                      placeholder="Enter Candle_type_id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Price:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.price"
                      required
                      placeholder="Enter Price">
        </b-form-input>
      </b-form-group>

      
        </b-row>
    
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        <b-button size="sm" @click="apply(row)">Apply</b-button>
      </b-card>
    </template>


       </b-table>
       <b-button size="sm" v-b-toggle.Add6 variant="success" class="mr-2"> Add
      </b-button>
      <b-collapse id="Add6">
  <b-card>
        <b-row class="mb-2">
           
           <b-form-group id="exampleInputGroup1"
                    label="Candle_type_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.candle_type_id"
                      required 
                      placeholder="Enter Candle_type_id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Price:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.price"
                      required
                      placeholder="Enter Price">
        </b-form-input>
      </b-form-group>

        </b-row>
    
        <b-button size="sm" @click="apply()">Apply</b-button>
      </b-card>

      </b-collapse>
    </b-card>
  </b-collapse>
</div>
 </template>

 <script>
import axios from "axios";
export default {
    data(){return {item:{}}},
  props:['datas','fields','url'],
  methods:{
    apply(row){
      alert(this.url)
    },
    add(){
      alert(this.url)
    },
},
}
</script>