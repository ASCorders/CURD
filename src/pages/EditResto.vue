<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <div class="form bg-info shadow-lg px-2 py-3">
          <h1 class="text-center">Update Resto</h1>

          <RestoForm
            type="Update Resto"
            v-on:updateResto="UpdateFrom"
            :dataEdit="editData"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import RestoForm from "../components/RestoForm.vue";
export default {
  name: "EditResto",
  data() {
    return {
      editData: this.$route.params.id,
    };
  },
  components: {
    RestoForm,
  },
  methods: {
    UpdateFrom(data) {
      console.log(data);
      axios
        .put(`http://localhost:3000/restoList/${this.$route.params.id}`, data)
        .then((res) => {
          if (res.status === 200) {
            alert("Resto Update");
          }
        });
    },
  },
  created() {
    console.log("created");
  },
};
</script>
