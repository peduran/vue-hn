<template>
  <div id="app">
    <hn-header />
    <stories-list :stories="stories" />
  </div>
</template>

<script lang="ts">
import { getFullTopStories, Story } from "./api";
import StoriesList from "./components/StoriesList.vue";
import HnHeader from "./components/HnHeader.vue";

import Vue from "vue";

interface App {
  msg: string;
  stories: (Story & { ordinalId: number })[];
}

export default Vue.extend<App, {}, {}, {}>({
  data() {
    return {
      msg: "",
      stories: []
    };
  },
  mounted() {
    getFullTopStories().then(_stories => {
      this.stories = _stories.map((s, i) => ({ ordinalId: 1, ...s }));
    });
  },
  components: {
    StoriesList,
    HnHeader
  }
});
</script>

<style>
#app {
  background-color: #f6f6ef;
  display: flex;
  flex-direction: column;
  font-family: Verdana, Geneva, sans-serif;
}
</style>
