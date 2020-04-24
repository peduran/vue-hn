<template>
  <div class="headline">
    <div class="rank">{{rank}}. ▲</div>
    <div class="text">
      <div class="title">{{story.title}} ({{getDomain}})</div>
      <div class="subtext">{{story.score}} points by {{story.by}} {{formattedTime}} hours ago</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Story } from "../api";

export interface Props {
  story: Story;
  rank: number;
}

export default Vue.extend<{}, {}, {}, Props>({
  props: { story: { required: true }, rank: { required: true } },
  computed: {
    formattedTime() {
      return new Date(this.story.time * 1000).getHours();
    },
    getDomain(){
      const expr = /(?:^https?:\/\/)?(.*?)\/|$/gm
      const result = expr.exec(this.story.url)
      return result ? result[1] : ''


    }
  }
});
</script>

<style scoped>
.headline {
  display: flex;
  flex-direction: row;
}
.text {
  flex-direction: column;
}
.title {
  font-size: 11pt
}
.subtext {
  font-size: 9pt;
  color: #828282
}

.rank {
  color: #828282;
  min-width: 3rem;
}
</style>