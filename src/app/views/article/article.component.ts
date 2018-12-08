import {Component, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
import {Article, PostsList} from "~/model/posts-list.class";
import {ApiService} from "~/service/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservableService} from "~/service/observable.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  article: Article;
  isIndex = false;
  slug: string;
  pageId: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private osbService: ObservableService,
  ) {
    this.osbService.setPageClass('page-post-detail');
    this.slug = this.route.snapshot.data.slug;
    // this.pageId = '2018/10/15/在PostgresSQL啟用不區分大小寫欄位/';
    this.pageId = this.route.snapshot.routeConfig.path + '/';
    console.log(this.route.snapshot);
    console.log(this.pageId);
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
    ).subscribe();
    this.api.fetchPostBySlug(this.slug).pipe(
      tap(value => this.article = value)
    ).subscribe();
  }
}
