<template>

<div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse9 class="m-1">Report</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse9">
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
                    label="Date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="row.item.date"
                      required disabled
                      placeholder="Enter Date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Gain:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.gain"
                      required
                      placeholder="Enter Gain">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Earn:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.earn"
                      required
                      placeholder="Enter Earn">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Expense:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.expense"
                      required
                      placeholder="Enter Expense">
        </b-form-input>
      </b-form-group>

     

      
        </b-row>
    
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        <b-button size="sm" @click="apply(row)">Apply</b-button>
      </b-card>
    </template>


       </b-table>
       <b-button size="sm" v-b-toggle.Add9 variant="success" class="mr-2"> Add
      </b-button>
      <b-collapse id="Add9">
  <b-card>
        <b-row class="mb-2">
           
             <b-form-group id="exampleInputGroup1"
                    label="Date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="item.date"
                      required disabled
                      placeholder="Enter Date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Gain:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.gain"
                      required
                      placeholder="Enter Gain">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Earn:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.earn"
                      required
                      placeholder="Enter Earn">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Expense:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.expense"
                      required
                      placeholder="Enter Expense">
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