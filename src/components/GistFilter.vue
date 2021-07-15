<template>
  <div class="gist-filters">
    <!-- <input type="search" name="search" id="search" v-model="searchStr" /> -->
    <input type="search" name="search" id="search" @input="debounceInput" />
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  computed: {
    searchStr: {
      get() {
        return this.$store.state.gistFilters.searchStr;
      },
      set(value) {
        this.$store.commit("updateGistFilter", { searchStr: value });
      }
    }
  },

  methods: {
    debounceInput: debounce(function(e) {
      this.$store.dispatch("fetchAllGists", e.target.value);
    }, 500)
  }
};
</script>

<style scoped>
.gist-filters {
  padding: 15px 0;
}
#search {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #2d212126;
  outline: none;
}
</style>