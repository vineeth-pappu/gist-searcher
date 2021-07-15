<template>
  <div class="file-info">
    <div class="file-name">{{file.filename }}</div>
    <div class="file-lang text-light">Language: {{ file.language }}</div>
    <div class="file-type text-light">Type: {{ file.type }}</div>
  </div>
</template>

<script>
export default {
  props: ["file"]
};
</script>

<style scoped>
.file-name {
  font-weight: bold;
}
</style>