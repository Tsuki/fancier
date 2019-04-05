import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/app/model/site-config.class";
import {Post, PostsList} from "~/app/model/posts-list.class";
import {ApiService} from "~/app/service/api.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ObservableService} from "~/app/service/observable.service";
import {switchMap, tap} from "rxjs/operators";
import {environment} from '~/environments/environment';
import {format} from 'date-fns'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.styl']
})
export class ArchiveComponent implements OnInit {
  hexoConfig: HexoConfig = <HexoConfig>{};
  theme: Theme_config = <Theme_config>{};
  postsList: PostsList;
  posts: Post[];
  isIndex = false;
  currentPage: number = 1;
  postsLength: number = 0;
  mid_size = environment.mid_size;
  fnsFormat = format;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private osbService: ObservableService,
    private cdr: ChangeDetectorRef
  ) {
    this.isIndex = route.snapshot.data['isIndex'] == true;
    this.osbService.setPageClass('page-archive');
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(value => this.postsLength = value.posts_links.length),
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

  get cheers() {
    if (this.postsLength > 210) {
      return 'excellent';
    } else if (this.postsLength > 130) {
      return 'great'
    } else if (this.postsLength > 80) {
      return 'good'
    } else if (this.postsLength > 50) {
      return 'nice'
    } else if (this.postsLength > 30) {
      return 'ok'
    } else {
      return 'um'
    }
  }

  initPageJson() {
    this.api.fetchPostsList(this.currentPage).pipe(
      tap(value => this.postsList = value),
      tap(() => this.posts = this.postsList.data),
      tap(() => this.cdr.detectChanges()),
    ).subscribe()
  }
}
