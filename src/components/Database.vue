<template>

<div>
    <div class="mar" v-for="(i,index) in realList"  :key="index">

  <!-- Using modifiers -->
  <b-btn v-b-toggle.collapse2 class="m-1">Toggle Collapse</b-btn>
  <!-- element to collapse -->
  
  
  <b-collapse id="collapse2">
    <b-card>
       <b-table striped hover :items="items"></b-table>
    </b-card>
  </b-collapse>
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
      realList: arr
    };
  },
  methods: {
    onClick(event,event2) {
      this.$emit("clicked", [event,event2]);
    }
  }
};

for (var i in data) {
  item.push({isActive: true, id: i.id, first_name: 'Dickerson', last_name: 'Macdonald'})
}

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>
