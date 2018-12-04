<template>
  <div class="hello">
    <b-row style="margin-left:25px;">
      <div v-if="user==null">{{warn()}}</div>
      <div v-if="user!=null">
        <div class="mar" v-for="(i,index) in realList" :key="index">
          <b-card
            v-if="i.customers_id==user.id"
            :title="i.purchased_item.candle_type.name"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 13rem;"
            class="mb-2"
          >
            <img
              :src="require('./candle/'+i.purchased_item.candle_type.name+'/'+i.purchased_item.size_id+'.png')"
              width="180"
              height="200"
            >

            <p class="card-text">
              Amout :{{i.number}}
              <br>
              DateIn: {{i.date_in}}
              <br>
              DateOut: {{i.date_out}}
            </p>

            <!-- <b-button variant="primary" v-on:click="onClick(2,i.id)">Detail</b-button> -->
          </b-card>
        </div>
      </div>
    </b-row>
  </div>
</template>





<script>
var arr = [];

export default {
  name: "HelloWorld",
  props: {
    arr: Array
  },
  mounted() {
    this.user = this.$session.get("user");
    fetch("http://localhost:3000/api/waiting_list")
      .then(function(data) {
        return data.json();
      })
      .then(function(json) {
        // console.log(json);
        arr = json;
      });
    // console.log(this.user);
  },
  data() {
    return {
      user: this.$session.get("user"),
      realList: arr
    };
  },
  methods: {
    onClick(event, event2) {
      this.$emit("clicked", [event, event2]);
    },
    warn() {
      alert("Please login!!!");
    }
  }
};
</script>
<style>
div.mar {
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 25px;
  margin-left: 25px;
  align-items: center;
}
</style>
