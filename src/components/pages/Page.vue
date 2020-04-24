<template>
  <div class="page">
    <hn-header />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HnHeader from "@/components/HnHeader.vue";
export default Vue.extend({ components: { HnHeader } });
</script>