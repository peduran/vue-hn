<template>
  <div v-if="stories.length > 0">
    <headline
      class="headline"
      v-for="(story, i) in stories"
      :key="story.id"
      :story="story"
      :rank="i + 1"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Headline from "./Headline.vue";
import { Story } from "../api";
export default Vue.extend({
  props: {
    stories: {
      type: Array as PropType<Story[]>
    }
  },
  components: {
    Headline
  }
});
</script>
<style scoped>
.headline {
    padding: 3pt
}
</style>
