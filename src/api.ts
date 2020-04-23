import axios from "axios";

const topStoriesURI = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=30`;
const storyURI = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

type StoryIds = number[];
export interface Story {
  by: string;
  descendants: number;
  id: string;
  kids: StoryIds;
  score: number;
  time: Date;
  title: string;
  type: string;
  url: string;
}

const getTopStories = async (): Promise<StoryIds> =>
  (await axios.get<StoryIds>(topStoriesURI)).data;

const getFullStory = async (storyId: number): Promise<Story> =>
  (await axios.get<Story>(storyURI(storyId))).data;

export const getFullTopStories = async (): Promise<Story[]> => {
  const storyIds = await getTopStories();
  return Promise.all(storyIds.map(getFullStory));
};

// fun
// export const getfulltopstorieswithcallback = (r) => {
//   gettopstories().then((storyids) =>
//     storyids.map((s) => {
//       getfullstory(s).then(r);
//     })
//   );
// };
