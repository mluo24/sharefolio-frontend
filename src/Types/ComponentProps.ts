export interface UserTypePartial {
  id: number;
  username: string;
}

export interface StoryTypePartial {
  id: number;
  slug: string;
}

export interface StoryType extends StoryTypePartial {
  url: string;
  title: string;
  description: string;
  author: UserTypePartial;
  status: string;
  category: string;
  tags: string[];
  word_count: number;
  total_views: number;
  total_likes: number;
  created_at: string;
  updated_at: string;
}

export interface StoryCardProps {
  story: StoryType;
}

export interface StoryListProps {
  stories: StoryType[];
}

export interface CategoryType {
  id: number;
  url: string;
  name: string;
  slug: string;
  description: string;
  story_set: StoryType[];
}

export interface CategoryListProps {
  categories: CategoryType[];
}

export interface ChapterType {
  id: number;
  url: string;
  parent_story: StoryTypePartial;
  title: string;
  description: string;
  body: string;
  status: string;
  likes: UserTypePartial[];
  hit_count: number;
  created_at: string;
}

export interface ChapterListProps {
  chapters: ChapterType[];
}
