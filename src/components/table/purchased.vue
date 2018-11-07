<template>

  <div>
    <!-- <div class="mar" v-for="(i,index) in realList"  :key="index"> -->

    <!-- Using modifiers -->
    <b-btn v-b-toggle.collapse1 class="m-1">Purchased_Item</b-btn>
    <!-- element to collapse -->


    <b-collapse id="collapse1">
      <b-card>
        <b-table striped hover :items="datas" :fields="fields">
          <template slot="edit" slot-scope="row">
            <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
            <b-button size="sm" @click.stop="row.toggleDetails" variant="primary" class="mr-2">
              edit
            </b-button>
          </template>
          <template slot="delete" slot-scope="row">
            <b-button size="sm" variant="danger" @click="deleteRow(row.item.id)" class="mr-2"> Delete
            </b-button>

          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-form-group id="exampleInputGroup1" label="Id:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.id" required disabled placeholder="Enter id">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Type_Id:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.type_id" required placeholder="Enter id">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Number:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.number" required placeholder="Enter Number">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="Size Id:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.size_id" required placeholder="Enter Size Id">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="color_id:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.color_id" required placeholder="Enter color_id">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="min_weight:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.min_weight" required placeholder="Enter min_weight">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="price:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.price" required placeholder="Enter price">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="smell_id:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.smell_id" required placeholder="Enter smell_id">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="smell_id1:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="number" v-model="row.item.smell_id1" required placeholder="Enter smell_id1">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1" label="expr_date:" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="date" v-model="row.item.expr_date" required placeholder="Enter expr_date">
                  </b-form-input>
                </b-form-group>

              </b-row>

              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
              <b-button size="sm" variant="primary" @click="updateRow(row.item.id,row.item)">Apply</b-button>
            </b-card>
          </template>

        </b-table>


        <b-button size="sm" v-b-toggle.Add1 variant="success" class="mr-2"> Add
        </b-button>
        <b-collapse id="Add1">
          <b-card>
            <b-form @submit="onSubmit" @reset="onReset" >
              <b-row class="mb-2">


                <b-form-group label="Type_Id:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.type_id" required placeholder="Enter id">
                  </b-form-input>
                </b-form-group>

                <b-form-group  label="Number:" label-for="exampleInput1">
                  <b-form-input type="number" v-model="item.number" required placeholder="Enter Number">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Size Id:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.size_id" required placeholder="Enter Size Id">
                  </b-form-input>
                </b-form-group>

                <b-form-group  label="color_id:" label-for="exampleInput1">
                  <b-form-input type="number" v-model="item.color_id" required placeholder="Enter color_id">
                  </b-form-input>
                </b-form-group>

                <b-form-group  label="min_weight:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.min_weight" required placeholder="Enter min_weight">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="price:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.price" required placeholder="Enter price">
                  </b-form-input>
                </b-form-group>

                <b-form-group  label="smell_id:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.smell_id" required placeholder="Enter smell_id">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="smell_id1:" label-for="exampleInput1">
                  <b-form-input  type="number" v-model="item.smell_id1" required placeholder="Enter smell_id1">
                  </b-form-input>
                </b-form-group>

                <b-form-group  label="expr_date:" label-for="exampleInput1">
                  <b-form-input type="date" v-model="item.expr_date" required placeholder="Enter expr_date">
                  </b-form-input>
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
    return {
      item: {}
    };
  },
  props: ["datas", "fields", "url"],
  methods: {
    async deleteRow(id) {
      await axios.delete(this.url + "/" + id);
      this.$emit("reFetch");
    },
    async updateRow(id,item) {
      await axios.put(this.url + "/" + id,item);
      this.$emit("reFetch");
    },
    async onSubmit(evt) {
      evt.preventDefault();
     await axios.post(this.url, this.item);
       this.$emit("reFetch");this.item={};
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.item={};
    }
  }
};
</script>