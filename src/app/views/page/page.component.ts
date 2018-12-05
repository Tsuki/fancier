import {Component, OnInit} from '@angular/core';
import {HexoConfig, ThemeConfig} from '~/model/hexo-config.class';
import {ApiService} from '~/service/api.service';
import {tap} from 'rxjs/operators';
import {PostsList} from '~/model/posts-list.class';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.styl']
})
export class PageComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: ThemeConfig;
  postsList: PostsList;
  is_index = true;

  constructor(
    private api: ApiService
  ) {
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
