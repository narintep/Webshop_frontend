<template>

<div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse2 class="m-1">Purchased_Item</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse2">
    <b-card>
       <b-table striped hover :items="purchased" :fields="fields">
         <template slot="edit" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">
        edit
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
                      required
                      placeholder="Enter id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Type_Id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.type_id"
                      required
                      placeholder="Enter id">
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
                    label="Size Id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.size_id"
                      required
                      placeholder="Enter Size Id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="color_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.color_id"
                      required
                      placeholder="Enter color_id">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="exampleInputGroup1"
                    label="min_weight:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.min_weight"
                      required
                      placeholder="Enter min_weight">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="price:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.price"
                      required
                      placeholder="Enter price">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="smell_id:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.smell_id"
                      required
                      placeholder="Enter smell_id">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="smell_id1:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="row.item.smell_id1"
                      required
                      placeholder="Enter smell_id1">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="expr_date:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="row.item.expr_date"
                      required
                      placeholder="Enter expr_date">
        </b-form-input>
      </b-form-group>

        </b-row>
    
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        <b-button size="sm" @click="apply(row)">Apply</b-button>
      </b-card>
    </template>


       </b-table>
    </b-card>
  </b-collapse>
</div>






 </template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
    data() {
    return {
      fields: [ 'id', 'type_id', 'number','size_id','color_id','min_weight','price','smell_id','smell_id1','expr_date','edit','delete' ],
      state: 0,
      id: 0,
      sort: 0,
      purchased: [],
      topview:[],
      promotion:[],
      customer:[],
      history:[],
      invioce:[],
      report:[],
      view:[],
      waiting_list:[],
      size:[],
      candlet:[],
      colors:[],
      expense:[],
      smell:[],
      customert:[],
    item:[],
    };
  },
  mounted() {
    this.fetchData();
  }
  ,
  methods:{
    apply(row){
      alert(row.item.id)
    },

    fetchData() {
      const self = this;
       axios
        .get('http://localhost:3000/api/PurchasedItem')
        .then(response => response.data)
        .then(data => {
          self.purchased = data;
        })
//         .then({for (var i in self.purchased) {
//   self.item.push({isActive: true, id: i.id, type_id: i.type_id, number: i.number})
// }})
;
        axios
        .get('http://localhost:3000/api/PurchasedItem/TopView')
        .then(response => response.data)
        .then(data => {
          self.topview = data;
        });
        axios
        .get('http://localhost:3000/api/PurchasedItem/promotion')
        .then(response => response.data)
        .then(data => {
          self.promotion = data;
        });
        axios
        .get('http://localhost:3000/api/customers')
        .then(response => response.data)
        .then(data => {
          self.customer = data;
        });
        axios
        .get('http://localhost:3000/api/history')
        .then(response => response.data)
        .then(data => {
          self.history = data;
        });
         axios
        .get('http://localhost:3000/api/invioce')
        .then(response => response.data)
        .then(data => {
          self.invioce = data;
        });
         axios
        .get('http://localhost:3000/api/report')
        .then(response => response.data)
        .then(data => {
          self.report = data;
        });
         axios
        .get('http://localhost:3000/api/view')
        .then(response => response.data)
        .then(data => {
          self.view = data;
        });
         axios
        .get('http://localhost:3000/api/waiting_list')
        .then(response => response.data)
        .then(data => {
          self.waiting_list = data;
        });
        axios
        .get('http://localhost:3000/api/size')
        .then(response => response.data)
        .then(data => {
          self.size = data;
        });
        axios
        .get('http://localhost:3000/api/Candle_type')
        .then(response => response.data)
        .then(data => {
          self.candlet = data;
        });
         axios
        .get('http://localhost:3000/api/Colors')
        .then(response => response.data)
        .then(data => {
          self.colors = data;
        });
         axios
        .get('http://localhost:3000/api/expense')
        .then(response => response.data)
        .then(data => {
          self.expense = data;
        });
         axios
        .get('http://localhost:3000/api/smell')
        .then(response => response.data)
        .then(data => {
          self.smell = data;
        });
          axios
        .get('http://localhost:3000/api/customer_type')
        .then(response => response.data)
        .then(data => {
          self.customert = data;
        });
    }
    }
  
    
    }

    
    

</script>

