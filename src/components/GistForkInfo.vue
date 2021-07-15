<template>
  <div class="fork-info">
    <div class="fork-img">
      <img :src="fork.img" alt />
    </div>
    <div class="fork-details">
      <div class="user-name">vineeth</div>
      <div class="user-id text-light">
        Login ID:
        <b>123dasd</b>
      </div>
      <div class="public-gists-count text-light">
        Total Public Gist:
        <b>20</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fork"]
};
</script>

<style scoped>
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