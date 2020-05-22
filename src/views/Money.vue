<template>
  <div class="wrapper">
    <div class="content">
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
      <p>money</p>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
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