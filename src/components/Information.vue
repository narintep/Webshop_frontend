
<template>
  <b-card>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>
        <VueMonthlyPicker
          :monthLabels="monthsLabels"
          dateFormat="YYYY/MM"
          v-model="date"
          @selected="fetchData()"
        ></VueMonthlyPicker>
      </b-col>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
    <br>
    <div>
      <div v-for="bar in bars" :key="bar.variant" class="row mb-1">
        <div class="col-sm-2">{{ bar.text }}:{{bar.num}}</div>
        <div class="col-sm-10 pt-1">
          <b-progress
            :value="bar.value"
            :variant="bar.variant"
            :key="bar.variant"
            striped
            :animated="true"
            class="mb-2"
          ></b-progress>
        </div>
      </div>
    </div>
    <br>
    <b-table :items="items" :fields="fields">
      <template slot="show_details" slot-scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
        <!-- In some circumstances you may need to use @click.native.stop instead -->
        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
      </template>
      <template slot="row-details" slot-scope="row"></template>
    </b-table>
  </b-card>
</template>

<script>
import axios from "axios";
var moment = require("moment");
moment().format();
export default {
  mounted() {
    this.fetchData();
  },
  beforeDestroy() {},
  methods: {
    fetchData() {
        var temp = moment(this.date).toObject();
        temp.months++;
        // console.log(temp);
        const self = this;
        axios
          .get(
            "http://localhost:3000/api/report/" +
              temp.months +
              "/" +
              temp.years +
              ""
          )
          .then(response => response.data)
          .then(data => {
            self.items = data;
          });

        axios
          .get(
            "http://localhost:3000/api/report/sum/" +
              temp.months +
              "/" +
              temp.years +
              ""
          )
          .then(response => response.data)
          .then(data => {
            data.date='Total :';
            self.items.push(data);
            // console.log(self.items)
            self.bars[0].value = 0;
            self.bars[1].value = 0;
            self.bars[2].value = 0;
            self.bars[0].num = 0;
            self.bars[1].num = 0;
            self.bars[2].num = 0;
            // console.log(data);
            var sum = data.gain + data.earn + data.expense;
            if (sum != 0) {
              self.bars[0].num = data.gain;
              self.bars[1].num = data.earn;
              self.bars[2].num = data.expense;
              self.bars[0].value = (data.gain / sum) * 100;
              self.bars[1].value = (data.earn / sum) * 100;
              self.bars[2].value = (data.expense / sum) * 100;
            }

            // console.log(self.bars);
          });
      }
    
  },

  data() {
    return {
      monthsLabels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      date: moment(),
      fields: ["date", "gain", "earn", "expense"],
      items: [],
      bars: [
        { text: "Gain", variant: "success", value: 0, num: 0 },
        { text: "Earn", variant: "info", value: 0, num: 0 },
        { text: "Expense", variant: "danger", value: 0, num: 0 }
      ],
      timer: null
    };
  }
};
</script>