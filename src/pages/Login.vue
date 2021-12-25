<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 m-auto bg-warning shadow-lg">
        <div class="p-2">
          <div class="text-center">
            <img src="../assets/logo.png" alt="logo" width="100" />
          </div>
          <div class="form">
            <h1>Login</h1>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email id"
                v-model="userLogin.email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                v-model="userLogin.password"
              />
            </div>
            <button class="btn btn-primary w-100" @click="formLogin">
              Login
            </button>
            <router-link class="link-danger text-end d-block" to="/sign-up">signUp</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async formLogin() {
      let { email, password } = this.userLogin;
      if (email != "" && password != "") {
        await axios
          .get(
            `http://localhost:3000/users?email=${email}&password=${password}`
          )
          .then((response) => {
              if (response.data.length != 0) {
                  this.$router.push('/');
                localStorage.setItem('user-info', JSON.stringify(this.userLogin))
                   this.login = true;
              }
              else{
                  alert('You are not')
              }
          });
      } else {
        console.log("login validation error");
      }
    },
  },
  mounted() {
      let userInfo = localStorage.getItem('user-info');
      if (userInfo) {
          this.$router.push('/');
          this.login = true;
      }

  }
};
</script>
