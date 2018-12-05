import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HexoConfig} from "./model/hexo-config.class";
import {Category, PostsList, SpecificPostsList, Tag} from "./model/posts-list.class";
import {Article, Page} from "./model/article.class";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  // GET /api/site.json
  fetchHexoConfig() {
    return this.http.get<HexoConfig>('/api/site.json');
  }

  // GET /api/posts/:pageNum.json (default 1.json)
  fetchPostsList(currentPage: number = 1) {
    return this.http.get<PostsList>(`/api/posts/${currentPage}.json`);
  }

  // GET /api/tags/:TagName.json
  fetchPostsListByTag(tagName: string) {
    return this.http.get<SpecificPostsList>(`/api/tags/${tagName}.json`);
  }

  // GET /api/categories/:slug.json
  fetchPostsListByCategory(categoryName: string) {
    return this.http.get<SpecificPostsList>(`/api/categories/${categoryName}.json`);
  }


  // GET /api/articles/:Slug.json
  fetchPostBySlug(slug: string) {
    return this.http.get<Article>(`/api/articles/${slug}.json`);
  }


  // GET /api/tags.json
  fetchAllTags() {
    return this.http.get<Tag[]>('/api/tags.json');
  }


  // GET /api/categories.json
  fetchAllCategories() {
    return this.http.get<Category[]>('/api/categories.json');
  }


  // GET /api/pages/about/index.json
  // source : e.g. about/index
  fetchImplicitPageBySource(source: string) {
    return this.http.get<Page>(`/api/pages/${source}.json`);
  }
}
