import {Component, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from '~/model/site-config.class';
import {ApiService} from '~/service/api.service';
import {tap} from 'rxjs/operators';
import {PostsList} from '~/model/posts-list.class';
import {ActivatedRoute} from "@angular/router";
import {ObservableService} from "~/service/observable.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.styl']
})
export class PageComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  postsList: PostsList;
  isIndex = false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private osbService: ObservableService,
  ) {
    this.isIndex = route.snapshot.data['isIndex'] == true;
    this.osbService.setPageClass(this.isIndex ? 'page-home' : 'page-post-detail');
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
      tap(() => {
      })
    ).subscribe();
    this.api.fetchPostsList().pipe(
      tap(value => this.postsList = value),
    ).subscribe();
  }

}
