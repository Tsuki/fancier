export interface Basic {
  name: string;
  slug: string;
  count: number;
  path: string;
}

export interface Category extends Basic {
}


export interface Tag extends Basic {
}

export interface Post {
  _id: string;
  title: string;
  type: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  comments: boolean;
  permalink: string;
  path: string;
  excerpt: string;
  keywords?: any;
  cover?: any;
  content: string;
  text: string;
  link: string;
  raw?: any;
  photos: string[];
  source: string;
  categories: Category[];
  tags: Tag[];
}

export interface PostsList {
  total: number;
  pageSize: number;
  pageCount: number;
  data: Post[];
}

export interface Page {
  title: string;
  type: string;
  date: string;
  updated: string;
  comments: boolean;
  path: string;
  covers?: any;
  excerpt?: any;
  content: string;
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  updated: string;
  comments: boolean;
  path: string;
  photos: string[];
  link: string;
  excerpt?: any;
  covers?: any;
  content: string;
  categories: Category[];
  tags: Tag[];
}

export interface SpecificPostsList {
  name: string;
  slug: string;
  count: number;
  postlist: Post[];
}
