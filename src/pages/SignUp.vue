<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 m-auto bg-warning shadow-lg">
        <div class="p-2">
          <div class="text-center">
            <img src="../assets/logo.png" alt="logo" width="100" />
          </div>
          <div class="form">
            <h1>SignUp</h1>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="userSignup.name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email id"
                v-model="userSignup.email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                v-model="userSignup.password"
              />
            </div>
            <button class="btn btn-primary w-100" @click="formSignUp">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      userSignup: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async formSignUp() {
      let { name, email, password } = this.userSignup;
      if (name != "" && email != "" && password != "") {
        await axios
          .post("http://localhost:3000/users", {
            name: name,
            email: email,
            password: password,
          })
          .then((response) => {
            if (response.status === 201) {
              localStorage.setItem(
                "user-info",
                JSON.stringify(this.userSignup)
              );
              this.userSignup = { name: "", email: "", password: "" };
              this.$router.push('/')
            }
          });
      } else {
        alert("Error From Validation");
      }
    },
  },
};
</script>
