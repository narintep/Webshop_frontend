<template>
  <div>
    <b-row style="margin-left:25px;">
      <div
        v-if="i.number > 0 && calDay(i.expr_date)>0"
        class="mar"
        v-for="(i,index) in realList"
        :key="index"
      >
      
        <b-card
          :title="i.candle_type.name"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="mb-2"
        >
          <img
            :src="require('./candle/'+i.candle_type.name+'/'+i.size_id+'.png')"
            width="180"
            height="200"
          >

          <p v-if="calDay(i.expr_date)>=100" class="card-text">
            Min Weight : {{i.min_weight}}
            <br>
            price : {{parseInt(i.price+50)}} 
          </p>
          <p v-if="calDay(i.expr_date)<100" class="card-text">
            Min Weight : {{i.min_weight}} 
            <br>
            price : {{parseInt((i.price+50)/100*calDay(i.expr_date))}} <b-badge v-b-tooltip.hover :title="'From '+(i.price+50)" pill variant="danger">{{calDay(i.expr_date)-100}} %</b-badge> 
          </p>
          <b-button variant="primary" v-on:click="onClick(2,i)">Detail</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
var moment = require("moment");
export default {
  props: ["realList"],
  data() {
    return {
      currentDate: new Date()
    };
  },
  mounted() {},
  methods: {
    calDay(date) {
      var mo=new moment.duration(new Date(date) - this.currentDate)
      return parseInt(mo.asDays());
    },
    async onClick(event, event2) {
      const user = this.$session.get("user");
      if (user != null)
        await axios.post("http://localhost:3000/api/view", {
          customers_id: user.id,
          customers_username: user.username,
          candle_type_id: event2.type_id,
          time: 1
        });
      this.$emit("clicked", [event, event2.id]);
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
