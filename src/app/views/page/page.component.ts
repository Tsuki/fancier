import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from '~/app/model/site-config.class';
import {ApiService} from '~/app/service/api.service';
import {switchMap, tap} from 'rxjs/operators';
import {PostsList} from '~/app/model/posts-list.class';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ObservableService} from "~/app/service/observable.service";
import {postAnimation} from "~/app/utils/animation";
import {environment} from '~/environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.styl'],
  animations: [postAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  postsList: PostsList;
  isIndex = false;
  currentPage: number = 1;
  mid_size = environment.mid_size;
  @HostBinding('@post') useMotion = false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private osbService: ObservableService,
    private cdr: ChangeDetectorRef
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
      tap(value => this.postsList = value),
      tap(() => this.cdr.detectChanges()),
    ).subscribe(() => this.useMotion = true)
  }


}
