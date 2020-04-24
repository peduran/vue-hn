<template>
  <div class="headline">
    <div class="rank">{{rank}}. ▲</div>
    <div class="text">
      <div class="title">
        {{story.title}}
        <span class="subtext">({{domain}})</span>
      </div>
      <div class="subtext">
        {{story.score}} points by {{story.by}} {{formattedTime}} hours ago | hide |
        <a
          :href="commentURL"
        >{{story.kids.length}} comments</a>
      </div>
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
    domain() {
      const expr = /(?:^https?:\/\/)?(.*?)\/|$/gm;
      const result = expr.exec(this.story.url);
      return result ? result[1] : "";
    },
    commentURL() {
      return `https://news.ycombinator.com/item?id=${this.story.id}`;
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
  font-size: 11pt;
}
.subtext,
a {
  font-size: 9pt;
  color: #828282;
  text-decoration: none;
}

.rank {
  color: #828282;
  min-width: 3rem;
}
</style>