
<template>

  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand v-on:click="onClick(0)"><img src="./../assets/home.png" height="25" width="25"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

     <b-navbar-nav>
      <b-nav-item v-on:click="onClick(1)" >Promotions</b-nav-item>
      <b-nav-item v-on:click="onClick(1)">Most Views</b-nav-item>
      <b-nav-item v-on:click="onClick(1)">Top Sells</b-nav-item>
       <b-nav-item-dropdown text="Categories" right>
        <b-dropdown-item v-on:click="onClick(1)">Generals</b-dropdown-item>
         
        <b-dropdown-item v-on:click="onClick(1)">Flowers</b-dropdown-item>
        <b-dropdown-item v-on:click="onClick(1)">Geoshapes</b-dropdown-item>
        <b-dropdown-item v-on:click="onClick(1)">Symbols</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      

      <b-nav-item v-b-modal.modal1 href="#">Login</b-nav-item>

      <b-nav-item v-on:click="onClick(4)">Signup</b-nav-item>
      <b-nav-item href="#"><img src="./../assets/cart.png" height="25" width="25"></b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
 <b-modal id="modal1" title="LOGIN!">
     <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
  </b-modal>
  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    onClick (event) {
      this.$emit('clicked', event)
    }
  }
  //   props: {
  //     msg: String
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
