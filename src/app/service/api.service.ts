import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HexoConfig} from "../model/hexo-config.class";
import {Category, PostsList, SpecificPostsList, Tag} from "../model/posts-list.class";
import {Article, Page} from "../model/article.class";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  // GET /api/site.json
  fetchHexoConfig(): Observable<HexoConfig> {
    return this.http.get<HexoConfig>('/api/site.json');
  }

  // GET /api/posts/:pageNum.json (default 1.json)
  fetchPostsList(currentPage: number = 1): Observable<PostsList> {
    return this.http.get<PostsList>(`/api/posts/${currentPage}.json`);
  }

  // GET /api/tags/:TagName.json
  fetchPostsListByTag(tagName: string): Observable<SpecificPostsList> {
    return this.http.get<SpecificPostsList>(`/api/tags/${tagName}.json`);
  }

  // GET /api/categories/:slug.json
  fetchPostsListByCategory(categoryName: string): Observable<SpecificPostsList> {
    return this.http.get<SpecificPostsList>(`/api/categories/${categoryName}.json`);
  }


  // GET /api/articles/:Slug.json
  fetchPostBySlug(slug: string): Observable<Article> {
    return this.http.get<Article>(`/api/articles/${slug}.json`);
  }


  // GET /api/tags.json
  fetchAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('/api/tags.json');
  }


  // GET /api/categories.json
  fetchAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories.json');
  }


  // GET /api/pages/about/index.json
  // source : e.g. about/index
  fetchImplicitPageBySource(source: string): Observable<Page> {
    return this.http.get<Page>(`/api/pages/${source}.json`);
  }
}
