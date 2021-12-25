<template>
  <form class="" @submit.prevent="submitResto">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Entetr Title"
        v-model="resTo.title"
      />
    </div>
    <div class="mb-3">
      <textarea
        class="form-control"
        rows="3"
        placeholder="Enter Comment"
        v-model="resTo.comment"
      ></textarea>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-danger">
        {{ type }}
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "RestoForm",
  props: ["type", "dataEdit"],
  data() {
    return {
      resTo: {
        title: "",
        comment: "",
      },
    };
  },
  methods: {
    submitResto() {
      let { title, comment } = this.resTo;
      if (title.trim() != "" && comment.trim() != "") {
        if (this.type == "Add Resto") {
          this.$emit("addResto", this.resTo);
          this.resTo = {
            title: "",
            comment: "",
          };
        } else if (this.type == "Update Resto") {
          this.$emit("updateResto", this.resTo);
          this.$router.push('/resto-list');
        }
      } else {
        alert("Form Validation");
      }
    },
  },
  mounted() {
    if (this.type == "Update Resto") {
      //get signle row data
      axios
        .get(`http://localhost:3000/restoList/${this.dataEdit}`)
        .then((response) => {
          let { title, comment } = response.data;
          this.resTo.title = title;
          this.resTo.comment = comment;
        })
        .catch((error) => {
          console.log("error edit data", error);
        });

      // end code here
    }
  },
};
</script>
