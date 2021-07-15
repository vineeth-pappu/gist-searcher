<template>
  <div class="gist-home-container">
    <GistFilter />
    <GistSearchResults />
  </div>
</template>

<script>
import GistSearchResults from "../components/GistSearchResults";
import GistFilter from "../components/GistFilter";

export default {
  name: "GistHome",
  components: {
    GistFilter,
    GistSearchResults
  }
};
</script>

<style scoped>
.gist-home-container {
  width: 80%;
  margin: auto;
}
</style>
