<template>
  <div>
    <div>{{rank}}</div>
    <div>{{story.title}}</div>
    <div>{{story.author}}</div>
    <div>{{story.time}}</div>
    <div>{{story.comments}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Story } from "../api";

export interface Props {
  story: Story;
  rank: number
}

export default Vue.extend<{}, {}, {}, Props>({
  props: { story: { required: true }, rank:{required: true} }
});
</script>

<style>
</style>