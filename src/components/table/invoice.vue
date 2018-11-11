<template>

<div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse8 class="m-1">Invoice</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse8">
    <b-card>
       <b-table striped hover :items="datas" :fields="fields">
         <template slot="edit" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">
        edit
      </b-button>
    </template>
    <template slot="delete" slot-scope="row">
      <b-button size="sm" variant="danger"  @click="deleteRow(row.item.id)" class="mr-2"> Delete
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
                      placeholder="Enter Id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customers_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.customers_id"
                      required disabled
                      placeholder="Enter Customers_id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customers_username:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="row.item.customers_username"
                      required disabled
                      placeholder="Enter Customers_username">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Purchased_item_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.purchased_item_id"
                      required disabled
                      placeholder="Enter Purchased_item_id">
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

      <b-form-group id="exampleInputGroup1"
                    label="Number:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.number"
                      required
                      placeholder="Enter Number">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="row.item.date"
                      required
                      placeholder="Enter Date">
        </b-form-input>
      </b-form-group>

      
        </b-row>
    
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        <b-button size="sm" @click="updateRow(row.item.id,row.item)">Apply</b-button>
      </b-card>
    </template>


       </b-table>
       <b-button size="sm" v-b-toggle.Add8 variant="success" class="mr-2"> Add
      </b-button>
      <b-collapse id="Add8">
  <b-card>
        <b-form @submit="onSubmit" @reset="onReset" >
          <b-row class="mb-2">
           
            <b-form-group id="exampleInputGroup1"
                    label="Id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.id"
                      required disabled
                      placeholder="Enter Id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customers_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.customers_id"
                      required
                      placeholder="Enter Customers_id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Customers_username:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="item.customers_username"
                      required
                      placeholder="Enter Customers_username">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Purchased_item_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.purchased_item_id"
                      required
                      placeholder="Enter Purchased_item_id">
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

      <b-form-group id="exampleInputGroup1"
                    label="Number:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="item.number"
                      required
                      placeholder="Enter Number">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="item.date"
                      required
                      placeholder="Enter Date">
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
    }
},
}
</script>