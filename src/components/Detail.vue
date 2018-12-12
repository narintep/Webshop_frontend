<template>
  <div class="hello">
    <div class="mar" v-for="(i,index) in realList" :key="index">
      <div v-if="input==i.id">
        <b-row>
          <b-col>
            <b-card width="10" heigt="10">
              <img
                :src="require('./candle/'+i.candle_type.name+'/'+i.size_id+'.png')"
                width="500"
                heigt="500"
              >
            </b-card>
          </b-col>
          <b-col>
            <h1>{{i.candle_type.name}} candle</h1>
            <b-row>
              <!-- <b-col> -->
              <!-- <p>size:</p> -->
              <!-- </b-col> -->
              <b-col>
                <b-form-group id="exampleInputGroup3" label="Size:" label-for="exampleInput3">
                  <b-form-select id="exampleInput3" :options="size" required v-model="size_select"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col>
                <p>number:</p>
                <b-input type="number" min="1" v-model="number" required placeholder="Enter value"></b-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group id="exampleInputGroup3" label="Smell 1:" label-for="exampleInput3">
                  <b-form-select id="exampleInput3" :options="smell" required v-model="smell1"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="exampleInputGroup3" label="Smell 2:" label-for="exampleInput3">
                  <b-form-select id="exampleInput3" :options="smell" required v-model="smell2"></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p>
                  TotalPrice : {{calPrice(number*(smell1+smell2+size_select+i.price),calDay(i.expr_date))}}$
                  <b-badge
                    v-if="calDay(i.expr_date)<100"
                    v-b-tooltip.hover
                    :title="'From '+(number*(smell1+smell2+size_select+i.price))"
                    pill
                    variant="danger"
                  >{{calDay(i.expr_date)-100}} %</b-badge>
                </p>
              </b-col>
              <b-col>
                <b-button variant="primary" v-b-modal.modal2>Buy</b-button>

                <b-modal @ok="Buy(i)" id="modal2" title="Your order is...">
                  <b-list-group>
                    <b-list-group-item>Standard price : {{i.price}}</b-list-group-item>
                    <b-list-group-item>Size : {{size_select}}</b-list-group-item>
                    <b-list-group-item>Number : {{number}}</b-list-group-item>
                    <b-list-group-item>First smell : {{smell1}}</b-list-group-item>
                    <b-list-group-item>Second smell : {{smell2}}</b-list-group-item>
                  </b-list-group>
                  <b-col>
                    <p>
                      TotalPrice : {{calPrice(number*(smell1+smell2+size_select+i.price),calDay(i.expr_date))}}$
                      <b-badge
                        v-if="calDay(i.expr_date)<100"
                        v-b-tooltip.hover
                        :title="'From '+(number*(smell1+smell2+size_select+i.price))"
                        pill
                        variant="danger"
                      >{{calDay(i.expr_date)-100}} %</b-badge>
                    </p>
                  </b-col>
                </b-modal>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<style>
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
<script>
var moment = require("moment");
const _ = require("lodash");
import axios from "axios";
export default {
  mounted() {
    var self = this;
    fetch("http://localhost:3000/api/size")
      .then(function(data) {
        return data.json();
      })
      .then(function(json) {
        // console.log(json);
        // arr2 = json;
        return json;
      })
      .then(function(data) {
        self.size = _.map(data, item => {
          return {
            value: item.price_per_size,
            text: item.name
          };
        });
      });

    fetch("http://localhost:3000/api/smell")
      .then(function(data) {
        return data.json();
      })
      .then(function(json) {
        // console.log(json);
        // arr2 = json;
        return json;
      })
      .then(function(data) {
        self.smell = _.map(data, item => {
          return {
            value: item.cost,
            text: item.name
          };
        });
      });

    fetch("http://localhost:3000/api/PurchasedItem")
      .then(function(data) {
        return data.json();
      })
      .then(function(json) {
        // console.log(json);
        self.realList = json;
      });
  },
  name: "HelloWorld",
  props: {
    input: Number
  },
  data() {
    return {
      smell1: 0,
      smell2: 0,
      number: 1,
      realList2: [],
      realList: [],
      smell: [],
      show: true,
      size: [],
      size_select: 50,
      currentDate: new Date(),
      bonus:0
    };
  },
  methods: {
    calPrice(price, day) {
      if (day < 100) {
        return (price / 100) * day;
      } else return price;
    },
    calDay(date) {
      if(this.smell1!=0&&this.smell2!=0)this.bonus=-10;
      else this.bonus=0;
      var mo = new moment.duration(new Date(date) - this.currentDate);
      var d=Math.min(100,mo.asDays());
      return parseInt(d)+this.bonus;
    },
    async Buy(item) {
      const user = this.$session.get("user");
      if (user == null) alert("Please login.");
      else {
        console.log(this.$session.get("user"));
        item.inumber = Math.min(item.number, this.number);
        item.wnumber = -Math.min(item.number - this.number, 0);
        item.amount=this.number;
        item.number = item.number - this.number;
        item.user = this.$session.get("user");
        item.earn = this.calPrice(
          this.number *
            (this.smell1 + this.smell2 + this.size_select + item.price),
          this.calDay(item.expr_date)
        );
        await axios.put("http://localhost:3000/api/PurchasedItem/buy/", item);
        var self = this;
        fetch("http://localhost:3000/api/PurchasedItem")
          .then(function(data) {
            return data.json();
          })
          .then(function(json) {
            // console.log(json);
            self.realList = json;
          });
      }
    }
  }
};
</script> 