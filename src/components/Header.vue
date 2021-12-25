<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Resto app</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="!login"
              >Login</router-link
            >
            <router-link class="nav-link" to="#" v-else @click.prevent="logout"
              >Logout</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-resto">Add Resto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      login: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.login = false;
    },
  },
  mounted() {
    let userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      // this.$router.push("/");
      this.login = true;
    }
  },
};
</script>
