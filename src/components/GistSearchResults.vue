<template>
  <div class="gist-search-results">
    <div class="results-info">8 results found</div>

    <div class="gist-items" v-for="(gist, idx) in gists" :key="idx">
      <GistItem :gist="gist" />
    </div>
  </div>
</template>

<script>
import GistItem from "./GistItem";
import { getAllGist } from "../services/GistService";

export default {
  components: {
    GistItem
  },

  data() {
    return {
      gists: []
    };
  },

  methods: {
    async getGists() {
      const gists = await getAllGist();
      this.gists = gists;
    }
  },

  created() {
    this.getGists();
  }
};
</script>

<style scoped>
.gist-search-results {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
}

.results-info {
  padding: 10px;
  text-align: center;
}

.gist-item {
  display: flex;
}
.gist-image {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
}
.gist-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>