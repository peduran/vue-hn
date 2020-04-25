<template>
  <div class="headline">
    <div class="upvote-widget">
      <div class="rank">{{ rank }}.</div>
      <div class="arrow">▲</div>
    </div>
    <div class="text">
      <div class="title">
        <a :href="story.url">{{ story.title }}</a>
        <span class="subtext"> ({{ domain }})</span>
      </div>
      <div class="subtext">
        {{ story.score }} points by {{ story.by }} {{ formattedTime }} hours ago
        | hide |
        <a
          :href="commentURL"
        >{{ story.kids.length }} comments</a>
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
  color: #000;
}
.subtext {
  font-size: 9pt;
  color: #828282;
}

.upvote-widget {
  display: flex;
  flex-direction: row;
  padding-right: 0.25rem;
}

.rank {
  color: #828282;
  min-width: 2em;
  text-align: end;
  padding-right: 0.25rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
