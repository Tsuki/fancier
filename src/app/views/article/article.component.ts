import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
import {Article} from "~/model/posts-list.class";
import {ApiService} from "~/service/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservableService} from "~/service/observable.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  article: Article;
  isIndex = false;
  json: string;
  pageId: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private osbService: ObservableService,
    private cdr: ChangeDetectorRef
  ) {
    this.osbService.setPageClass('page-post-detail');
    this.json = this.route.snapshot.data.json;
    this.pageId = this.route.snapshot.routeConfig.path + '/';
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
    ).subscribe();
    this.api.fetchPostBySlug(this.json).pipe(
      tap(value => this.article = value),
      tap(() => {
        this.article.content = this.article.content.replace(/<img(.*?)>/g, '<nat-picture$1></nat-picture>')
      }),
      tap(() => this.cdr.detectChanges()),
    ).subscribe();
  }
}
