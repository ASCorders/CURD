<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <div class="form bg-info shadow-lg px-2 py-3">
          <h1 class="text-center">Add Resto</h1>

          <RestoForm type="Add Resto" v-on:addResto="addFrom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestoForm from "../components/RestoForm.vue";
import axios from "axios";
export default {
  name: "AddResto",
  components: {
    RestoForm,
  },
  methods: {
    addFrom(data) {
      axios.post("http://localhost:3000/restoList", data).then((response) => {
        if (response.status === 201) {
          alert("Resto add Successfuly");
          this.$router.push("resto-list");
        }
      });
    },
  },
};
</script>
