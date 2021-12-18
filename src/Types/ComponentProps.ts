export interface StoryType {
  id: number;
  title: string;
  slug: string;
  description: string;
  author: string;
  status: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StoryCardProps {
  story: StoryType;
}

export interface StoryListProps {
  stories: StoryType[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}
