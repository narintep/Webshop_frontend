
<template>
  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand v-on:click="onClick(0)">
        <img src="./../assets/home.png" height="25" width="25">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-on:click="onClick(1,0)">Promotions</b-nav-item>
          <b-nav-item v-on:click="onClick(1,1)">Most Views</b-nav-item>
          <b-nav-item v-on:click="onClick(1,2)">Top Sells</b-nav-item>

          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item v-on:click="onClick(1,3)">Generals</b-dropdown-item>

            <b-dropdown-item v-on:click="onClick(1,4)">Flowers</b-dropdown-item>
            <b-dropdown-item v-on:click="onClick(1,5)">Geoshapes</b-dropdown-item>
            <b-dropdown-item v-on:click="onClick(1,6)">Symbols</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="user_data!=null">
            <div v-if="user_data.username=='admin'">
              <b-nav-item v-on:click="onClick(11)">Report</b-nav-item>
              <b-nav-item v-on:click="onClick(6)">Database</b-nav-item>
            </div>
          </div>

          <b-nav-item v-b-modal.modal1 v-if="user_data==null" href="#">Login</b-nav-item>
          <b-nav-item-dropdown v-if="user_data!=null" :text="user_data.username" right>
            <b-dropdown-item-button v-on:click="logout">logout</b-dropdown-item-button>
            <b-dropdown-item-button v-on:click="onClick(5)">edit profile</b-dropdown-item-button>
          </b-nav-item-dropdown>
          <b-nav-item v-if="user_data==null" v-on:click="onClick(4)">Signup</b-nav-item>
          <b-nav-item v-b-modal.modal1 v-if="user_data==null" href="#">
            <img src="./../assets/cart.png" height="25" width="25">
          </b-nav-item>
          <b-nav-item v-on:click="onClick(3)" v-if="user_data!=null" href="#">
            <img src="./../assets/cart.png" height="25" width="25">
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal @ok="login" id="modal1" title="LOGIN!">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid':  !username }"
        >
        <div v-show=" !username" class="invalid-feedback">Username is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': !password }"
        >
        <div v-show=" !password" class="invalid-feedback">Password is required</div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
var data = null;

export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {
    this.tryLogin();
  },
  computed: {
    ...mapGetters({
      user_data: "Customer/user_data"
    })
  },
  methods: {
    tryLogin() {
      this.setCustomer(this.$session.get("user"));
    },
    ...mapActions({
      setCustomer: "Customer/setCustomer"
    }),
    onClick(event, event2) {
      this.$emit("clicked", [event, event2]);
    },
    logout() {
      this.setCustomer(null);
      this.$session.remove("user");
      this.onClick(0);
    },
    login() {
      var self = this;
      fetch(
        "http://localhost:3000/api/customers/" +
          this.username +
          "/" +
          this.password
      )
        .then(function(data) {
          return data.json();
        })
        .then(function(json) {
          // console.log(json);
          // arr2 = json;
          if (json.length > 0) {
            data = json[0];
            let user = data;
            self.setCustomer(user);

            self.$session.set("user", user);
          } else {
            alert("cannot login");
          }
          // return json;
        });
    }
  }
  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
a:hover {
  color: #ffbb00;
}
/* a:active {
  background-color: #f0f0f0;
} */
</style>
