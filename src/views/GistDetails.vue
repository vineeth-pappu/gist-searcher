<template>
  <div class="gist-details">
    <section class="gist-files">
      <h2>Files</h2>
      <div class="gist-files-list" v-for="(file, idx) in files" :key="idx">
        <GistFileInfo :file="file" />
      </div>
    </section>

    <section class="gist-forks">
      <h2>Forks</h2>
      <div class="gist-forks-list" v-for="(fork, idx) in gistDetails.forks" :key="idx">
        <GistForkInfo :fork="{fork}" />
      </div>
      <div class="gist-forks-list" v-if="!gistDetails.forks || !gistDetails.forks.length">No Forks</div>
    </section>
  </div>
</template>

<script>
import { getGistDetailsById } from "../services/GistService";
import GistFileInfo from "../components/GistFileInfo";
import GistForkInfo from "../components/GistForkInfo";

export default {
  components: {
    GistFileInfo,
    GistForkInfo
  },

  data() {
    return {
      gistDetails: {}
    };
  },

  computed: {
    files() {
      const files = this.gistDetails.files || {};
      return Object.values(files);
    }
  },

  methods: {
    async getGistDetails() {
      const gistId = this.$route.params.gistId;
      const data = await getGistDetailsById(gistId);
      this.gistDetails = data;
    }
  },

  created() {
    this.getGistDetails();

    console.log("store", this.$store);
  }
};
</script>

<style scoped>
.gist-details {
  width: 70%;
  margin: auto;
}
section {
  margin-bottom: 20px;
}

.gist-files-list,
.gist-forks-list {
  padding: 20px 15px;
  background: #fff;
  border-radius: 8px;
}

.file-name {
  font-weight: bold;
}
.text-light {
  color: #777;
}

.fork-info {
  display: flex;
}
.fork-img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
}
.fork-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fork-details {
  padding-left: 10px;
}
.user-name {
  font-weight: bold;
}
</style>