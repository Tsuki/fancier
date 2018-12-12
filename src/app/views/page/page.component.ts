import {Component, HostBinding, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from '~/model/site-config.class';
import {ApiService} from '~/service/api.service';
import {switchMap, tap} from 'rxjs/operators';
import {PostsList} from '~/model/posts-list.class';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ObservableService} from "~/service/observable.service";
import {postAnimation} from "~/utils/animation";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.styl'],
  animations: [postAnimation]
})
export class PageComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  postsList: PostsList;
  isIndex = false;
  currentPage: number = 1;
  mid_size = 1;
  @HostBinding('@post') useMotion = false;

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
    ).subscribe();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          const page = params.get('page');
          this.currentPage = page ? Number(page) : 1;
          this.initPageJson();
          return [];
        }
      )
    ).subscribe();
  }

  initPageJson() {
    this.api.fetchPostsList(this.currentPage).pipe(
      tap(value => this.postsList = value)
    ).subscribe(() => this.useMotion = true)
  }


}
