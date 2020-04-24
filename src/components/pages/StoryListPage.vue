<template>
  <page>
      <stories-list :stories="stories"/>
  </page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "./Page.vue";
import HnHeader from "@/components/HnHeader.vue"
import StoriesList from "@/components/StoriesList.vue"
import { getFullTopStories, Story } from '@/api';

interface Data {
    stories: Story[]
}

export default Vue.extend({
  data(): Data {
    return {
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
    HnHeader,
    Page
  }
});
</script>
<style>
</style>