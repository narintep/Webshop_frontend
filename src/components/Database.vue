<template>
<div>
  <Purchased :datas="purchased" :fields="fields_purchased" url="http://localhost:3000/api/PurchasedItem" v-on:reFetch="fetchData" />
  <Candlet :datas="candlet" :fields="fields_candlet" url="http://localhost:3000/api/Candle_type"  v-on:reFetch="fetchData" />
  <Colors :datas="colors" :fields="fields_colors" url="http://localhost:3000/api/Colors"  v-on:reFetch="fetchData" />
  <Customer :datas="customer" :fields="fields_customer" url="http://localhost:3000/api/customers"  v-on:reFetch="fetchData" />
  <Customert :datas="customert" :fields="fields_customert" url="http://localhost:3000/api/customer_type" v-on:reFetch="fetchData" />
  <Expense :datas="expense" :fields="fields_expense" url="http://localhost:3000/api/expense"  v-on:reFetch="fetchData" />
  <History :datas="history" :fields="fields_history" url="http://localhost:3000/api/history" v-on:reFetch="fetchData" />
  <Invoice :datas="invoice" :fields="fields_invoice" url="http://localhost:3000/api/invoice" v-on:reFetch="fetchData" />
  <Purchased :datas="purchased" :fields="fields_purchased" url="http://localhost:3000/api/PurchasedItem"  v-on:reFetch="fetchData" />
  <Report :datas="report" :fields="fields_report" url="http://localhost:3000/api/report" v-on:reFetch="fetchData" />
  <Size :datas="size" :fields="fields_size" url="http://localhost:3000/api/size" v-on:reFetch="fetchData" />
  <Smell :datas="smell" :fields="fields_smell" url="http://localhost:3000/api/smell" v-on:reFetch="fetchData" />
  <Viewz :datas="view" :fields="fields_view" url="http://localhost:3000/api/view"  v-on:reFetch="fetchData" />
  <Waitingl :datas="waitingl" :fields="fields_waitingl" url="http://localhost:3000/api/waiting_list"  v-on:reFetch="fetchData" />

</div>
</template>
>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
    data() {
    return {
      fields_candlet: [ 'id','name','edit','delete' ],
      fields_colors: [ 'id','name','edit','delete' ],
      fields_customer: [ 'id','name','surname','age','b_date','address','username','password','customer_type_id','edit','delete' ],
      fields_customert: [ 'id','name','edit','delete' ],
      fields_expense: [ 'candle_type_id','price','edit','delete' ],
      fields_history: [ 'customers_id','customers_username','purchased_item_id','number','edit','delete' ],
      fields_invoice: [ 'id','customers_id','customers_username','purchased_item_id','price','number','date','edit','delete' ],
      fields_purchased: [ 'id', 'type_id', 'number','size_id','color_id','min_weight','price','smell_id','smell_id1','expr_date','edit','delete' ],
      fields_report: [ 'date','gain','earn','expense','edit','delete' ],
      fields_size: [ 'id','name','price_per_size','edit','delete' ],
      fields_smell: [ 'id','name','cost','edit','delete' ],
      fields_view: [ 'customers_id','customers_username','candle_type_id','time','edit','delete' ],
      fields_waitingl: [ 'customers_id','customers_username','purchased_item_id','date_in','date_out','number','edit','delete' ],

      state: 0,
      id: 0,
      sort: 0,
      purchased: [],
      customer:[],
      history:[],
      invoice:[],
      report:[],
      view:[],
      waitingl:[],
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
        .get('http://localhost:3000/api/invoice')
        .then(response => response.data)
        .then(data => {
          self.invoice = data;
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
          self.waitingl = data;
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

