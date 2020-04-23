<template>
  <div id="app">
    <ul>
      <li v-for="story in stories" v-bind:key="story.id">{{ story.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getFullTopStories, Story } from "./api";

import Vue from "vue";

interface App {
  msg: string;
  stories: Story[];
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
      this.stories = _stories;
    });
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
