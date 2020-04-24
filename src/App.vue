<template>
  <div id="app">
    <hn-header />
    <div v-if="stories.length > 0">
      <headline v-for="(story, i) in stories" :key="story.id" :story="story" :rank="i+1" />
    </div>
  </div>
</template>

<script lang="ts">
import { getFullTopStories, Story } from "./api";
import Headline from "./components/Headline.vue";
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
    Headline,
    HnHeader
  }
});
</script>

<style>
#app {
  background-color: #f6f6ef;
  margin-top: 60px;
}
</style>
