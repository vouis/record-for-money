<template >
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistic" />统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script >

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  > .item.selected {
    color: #30a36f;
  }
}
</style>