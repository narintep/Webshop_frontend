<template>
<b-container fluid>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="handleSubmit">
        <b-row >
            <b-col sm="5">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
            </div>
            </b-col>
        </b-row>    
        <b-row >
            <b-col sm="5">
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
            </div>
            </b-col>
        </b-row>   
        <b-row >
            <b-col sm="5">    
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            </b-col>
        </b-row>  
        <b-row >
            <b-col sm="5">     
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
             </b-col>
        </b-row>
        <b-row >
            <b-col sm="5">     
             <div class="form-group">
                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" v-model="user.birthdate" v-validate="{ required: true, min: 6 }" name="birthdate" class="form-control" :class="{ 'is-invalid': submitted && errors.has('birthdate') }" />
                <div v-if="submitted && errors.has('birthdate')" class="invalid-feedback">{{ errors.first('birthdate') }}</div>
            </div>
            </b-col>
        </b-row>
        <b-row >
            <b-col sm="5">     
             <div class="form-group">
                <label htmlFor="age">Age</label>
                <input type="number"  min="1" v-model="user.age" v-validate="{ required: true, min: 6 }" name="age" class="form-control" :class="{ 'is-invalid': submitted && errors.has('age') }" />
                <div v-if="submitted && errors.has('age')" class="invalid-feedback">{{ errors.first('age') }}</div>
            </div>
            </b-col>
        </b-row>    
        <b-row >
            <b-col sm="5">   
             <div class="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" v-model="user.location" v-validate="{ required: true, min: 6 }" name="location" class="form-control" :class="{ 'is-invalid': submitted && errors.has('location') }" />
                <div v-if="submitted && errors.has('location')" class="invalid-feedback">{{ errors.first('location') }}</div>
            </div>
            </b-col>
        </b-row>   
          
         <b-row >
            <b-col sm="5"> 
            <div class="form-group">
                <label htmlFor="type">Type</label>
                <input type="int" v-model="user.type" v-validate="{ required: true, min: 6 }" name="type" class="form-control" :class="{ 'is-invalid': submitted && errors.has('type') }" />
                <div v-if="submitted && errors.has('type')" class="invalid-feedback">{{ errors.first('type') }}</div>
            </div>
           </b-col>
        </b-row>      

            <!-- <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div> -->
        </form>
    </div>
 </b-container>   
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      },
      submitted: false
    };
  },
  methods: {}
};
</script>