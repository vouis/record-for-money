<template >
  <div class="nav">
    <router-link to="/money">
      <Icon name="money" />
      <span>记账</span>
    </router-link>|
    <router-link to="/labels">
      <Icon name="label" />标签
    </router-link>|
    <router-link to="/statistics">
      <Icon name="statistic" />统计
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script >

<style lang="scss" scoped>
</style>