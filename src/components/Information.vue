
<template>
  <b-card>
    <VueMonthlyPicker dateFormat="YYYY/MM" v-model="date" @selected="fetchData()"></VueMonthlyPicker>
    <div>
      <div v-for="bar in bars" class="row mb-1">
        <div class="col-sm-2">{{ bar.variant }}:</div>
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
    <b-table :items="items" :fields="fields">
      <template slot="show_details" slot-scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
        <b-button
          size="sm"
          @click.stop="row.toggleDetails"
          class="mr-2"
        >{{ row.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>
        <!-- In some circumstances you may need to use @click.native.stop instead -->
        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
      </template>
      <template slot="row-details" slot-scope="row"></template>
    </b-table>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
    this.timer = setInterval(() => {
      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    fetchData() {
      if (this.date != null) {
        var temp = this.date._i.split("/");
        const self = this;
        axios
          .get(
            "http://localhost:3000/api/report/" + temp[1] + "/" + temp[0] + ""
          )
          .then(response => response.data)
          .then(data => {
            self.items = data;
          });
      }
    }
  },

  data() {
    return {
      date: null,
      fields: ["date", "gain", "earn", "expense"],
      items: [],
      bars: [
        { variant: "success", value: 75 },
        { variant: "info", value: 75 },
        { variant: "warning", value: 75 },
        { variant: "danger", value: 75 },
        { variant: "primary", value: 75 },
        { variant: "secondary", value: 75 },
        { variant: "dark", value: 75 }
      ],
      timer: null
    };
  }
};
</script>