<template>

<div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse5 class="m-1">Customer</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse5">
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
                    label="Id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.id"
                      required disabled
                      placeholder="Enter id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.name"
                      required
                      placeholder="Enter Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Surname:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.surname"
                      required
                      placeholder="Enter Surname">
        </b-form-input>
      </b-form-group>

    <b-form-group id="exampleInputGroup1"
                    label="Age:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.age"
                      required
                      placeholder="Enter Age">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="B_date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="row.item.b_date"
                      required
                      placeholder="Enter B_date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.address"
                      required
                      placeholder="Enter Address">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Username:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.username"
                      required
                      disabled
                      placeholder="Enter Username">
                      
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Password:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customer_type_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.customer_type_id"
                      required
                      placeholder="Enter Customer_type_id">
        </b-form-input>
      </b-form-group>
      
      
        </b-row>
    
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        <b-button size="sm" @click="updateRow(row.item.id,row.item)">Apply</b-button>
      </b-card>
    </template>


       </b-table>
       <b-button size="sm" v-b-toggle.Add5 variant="success" class="mr-2"> Add
      </b-button>
      <b-collapse id="Add5">
  <b-card>
    <b-form @submit="onSubmit" @reset="onReset" >
        <b-row class="mb-2">
          

      <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.name"
                      required
                      placeholder="Enter Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Surname:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.surname"
                      required
                      placeholder="Enter Surname">
        </b-form-input>
      </b-form-group>

    <b-form-group id="exampleInputGroup1"
                    label="Age:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.age"
                      required
                      placeholder="Enter Age">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="B_date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="item.b_date"
                      required
                      placeholder="Enter B_date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.address"
                      required
                      placeholder="Enter Address">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Username:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.username"
                      required 
                      placeholder="Enter Username">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Password:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customer_type_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.customer_type_id"
                      required
                      placeholder="Enter Customer_type_id">
        </b-form-input>
      </b-form-group>
      

        </b-row>
    
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
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
     async deleteRow(id) {
      await axios.delete(this.url + "/" + id);
      this.$emit("reFetch");
    },
    async updateRow(id, item) {
      await axios.put(this.url + "/" + id, item);
      this.$emit("reFetch");
    },
    async onSubmit(evt) {
      evt.preventDefault();
      await axios.post(this.url, this.item);
      this.$emit("reFetch");
      this.item = {};
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.item = {};
    
    },
},
}
</script>