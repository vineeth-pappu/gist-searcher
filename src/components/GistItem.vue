<template>
  <router-link :to="'/gist/' + gist.id">
    <div class="gist-item">
      <div class="gist-image">
        <img :src="gist.owner.avatar_url" alt />
      </div>
      <div class="gist-info">
        <div class="gist-name">{{ gist.description }}</div>
        <div class="gist-link">{{ gist.url }}</div>
        <div class="gist-tags">
          <Tag />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Tag from "./Tag";
export default {
  props: ["gist"],

  components: {
    Tag
  }
};
</script>

<style scoped>
.gist-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.gist-item:hover {
  background: #eee;
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

.gist-info {
  padding-left: 15px;
}
.gist-name {
  font-weight: bold;
}
.gist-link {
  color: #777;
}

.gist-tags {
  margin-top: 10px;
  display: inline-flex;
}
</style>