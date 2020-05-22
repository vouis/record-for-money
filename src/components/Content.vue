<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>