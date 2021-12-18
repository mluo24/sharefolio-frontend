import { CategoryType, StoryType } from "./Types/ComponentProps";

const stories: StoryType[] = [
  //   {
  //     id: 1,
  //     title: "Hello!",
  //     slug: "hello",
  //     description: "This is a story description",
  //     author: "Miranda",
  //     status: "hello",
  //     category: "Romance",
  //     tags: ["tag1", "tag2"],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: 2,
  //     title: "Hello 2!",
  //     slug: "hello-2",
  //     description: "This is another story description",
  //     author: "Miranda",
  //     status: "hello",
  //     category: "Action",
  //     tags: ["tag1"],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
];

export function getStories() {
  return stories;
}

export function getStory(id: number, slug: string) {
  return stories.find((story) => story.id === id && story.slug === slug);
}

const categories: CategoryType[] = [
  //   {
  //     id: 1,
  //     name: "Romance",
  //     slug: "romance",
  //     description: "love",
  //   },
  //   {
  //     id: 2,
  //     name: "Action",
  //     slug: "action",
  //     description: "action packed",
  //   },
];

export function getCategories() {
  return categories;
}
