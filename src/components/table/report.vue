<template>
  <div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->
    <!-- Using modifiers -->
    <b-btn v-b-toggle.collapse9 class="m-1">Report</b-btn>
    <!-- element to collapse -->
    <b-collapse id="collapse9">
      <b-card>
        <b-table striped hover :items="datas" :fields="fields">
          <template slot="edit" slot-scope="row">
            <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
            <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">edit</b-button>
          </template>
          <template slot="delete" slot-scope="row">
            <b-button size="sm" variant="danger" @click="deleteRow(row.item.date)" class="mr-2">Delete</b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-form-group id="exampleInputGroup1" label="Date:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="row.item.date"
                    required
                    disabled
                    placeholder="Enter Date"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Gain:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="row.item.gain"
                    required
                    placeholder="Enter Gain"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Earn:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="text"
                    v-model="row.item.earn"
                    required
                    placeholder="Enter Earn"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Expense:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="row.item.expense"
                    required
                    placeholder="Enter Expense"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
              <b-button size="sm" @click="updateRow(row.item.date,row.item)">Apply</b-button>
            </b-card>
          </template>
        </b-table>
        <b-button size="sm" v-b-toggle.Add9 variant="success" class="mr-2">Add</b-button>
        <b-collapse id="Add9">
          <b-card>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-row class="mb-2">
                <b-form-group id="exampleInputGroup1" label="Date:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="item.date"
                    required
                    placeholder="Enter Date"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Gain:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="item.gain"
                    required
                    placeholder="Enter Gain"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Earn:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="text"
                    v-model="item.earn"
                    required
                    placeholder="Enter Earn"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Expense:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="item.expense"
                    required
                    placeholder="Enter Expense"
                  ></b-form-input>
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
  data() {
    return { item: {} };
  },
  props: ["datas", "fields", "url"],
  methods: {
    async deleteRow(date) {
      await axios.delete(this.url + "/" + date);
      this.$emit("reFetch");
    },
    async updateRow(date, item) {
      await axios.put(this.url + "/" + date, item);
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
  }
};
</script>