<template>
  <div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->
    <!-- Using modifiers -->
    <b-btn v-b-toggle.collapse13 class="m-1">Waiting_list</b-btn>
    <!-- element to collapse -->
    <b-collapse id="collapse13">
      <b-card>
        <b-table striped hover :items="datas" :fields="fields">
          <template slot="edit" slot-scope="row">
            <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
            <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">edit</b-button>
          </template>
          <template slot="delete" slot-scope="row">
            <b-button size="sm" variant="danger" @click="deleteRow(row.item)" class="mr-2">Delete</b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-form-group
                  id="exampleInputGroup1"
                  label="Customers_id:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="row.item.customers_id"
                    required
                    disabled
                    placeholder="Enter Customers_id"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="exampleInputGroup1"
                  label="Customers_username:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="text"
                    v-model="row.item.customers_username"
                    required
                    disabled
                    placeholder="Enter Customers_username"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="exampleInputGroup1"
                  label="Purchased_item_id:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="row.item.purchased_item_id"
                    required
                    disabled
                    placeholder="Enter Purchased_item_id"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Date_in:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="row.item.date_in"
                    required
                    placeholder="Enter Date_in"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Date_out:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="row.item.date_out"
                    required
                    placeholder="Enter Date_out"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Number:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="row.item.number"
                    required
                    placeholder="Enter Number"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
              <b-button size="sm" @click="updateRow(row.item)">Apply</b-button>
            </b-card>
          </template>
        </b-table>
        <b-button size="sm" v-b-toggle.Add13 variant="success" class="mr-2">Add</b-button>
        <b-collapse id="Add13">
          <b-card>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-row class="mb-2">
                <b-form-group
                  id="exampleInputGroup1"
                  label="Customers_id:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="item.customers_id"
                    required
                    placeholder="Enter Customers_id"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="exampleInputGroup1"
                  label="Customers_username:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="text"
                    v-model="item.customers_username"
                    required
                    placeholder="Enter Customers_username"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="exampleInputGroup1"
                  label="Purchased_item_id:"
                  label-for="exampleInput1"
                >
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="item.purchased_item_id"
                    required
                    placeholder="Enter Purchased_item_id"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Date_in:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="item.date_in"
                    required
                    placeholder="Enter Date_in"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Date_out:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="date"
                    v-model="item.date_out"
                    required
                    placeholder="Enter Date_out"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Number:" label-for="exampleInput1">
                  <b-form-input
                    id="exampleInput1"
                    type="number"
                    v-model="item.number"
                    required
                    placeholder="Enter Number"
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
    async deleteRow(item) {
      await axios.delete(this.url + "/" + JSON.stringify(item));
      this.$emit("reFetch");
    },
    async updateRow(item) {
      await axios.put(this.url + "/", item);
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