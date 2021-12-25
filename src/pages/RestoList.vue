<template>
  <div class="container">
    <div class="col-md-6 m-auto">
      <div class="table-responsive">
        <table class="table table-success table-striped p-3 shadow-lg">
          <caption class="caption-top">
            List of Resto
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, index) in lists" :key="index">
              <td>{{ list.id }}</td>
              <td>{{ list.title }}</td>
              <td>{{ list.comment }}</td>
              <td>
                <router-link
                  class="btn btn-warning btn-sm"
                  :to="'/edit-resto/' + list.id"
                >
                  Edit
                </router-link>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteItem(list.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RestoList",
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    async getList() {
      await axios.get("http://localhost:3000/restoList").then((response) => {
        this.lists = response.data;
      });
    },
    async deleteItem(id) {
      await axios
        .delete(`http://localhost:3000/restoList/${id}`)
        .then((res) => {
          if (res.status === 200) {
            alert("deleted");
          }
        });

      const data = this.lists.filter((list) => {
        return list.id != id;
      });

      this.lists = data;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
