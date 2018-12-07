import {Component, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ApiService} from './service/api.service';
import {tap} from 'rxjs/operators';
import {HexoConfig, Theme_config} from '~/model/site-config.class';
import {Title} from '@angular/platform-browser';
import {Router, Routes} from "@angular/router";
import {PageComponent} from "~/views/page/page.component";
import {PostPageComponent} from "~/views/post-page/post-page.component";
import {Route} from "@angular/router/src/config";
import {ObservableService} from "~/service/observable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: Theme_config;
  bodyClass = this.osbService.bodyClass;
  lang = 'default';


  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private titleService: Title,
    private router: Router,
    private osbService: ObservableService,
    private api: ApiService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('default');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
  }

  ngOnInit(): void {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
      tap(() => this.titleService.setTitle(this.hexoConfig.title)),
      tap(() => {
        if (this.theme.sidebar.position) {
          this.osbService.addBodyClass('sidebar-position-' + this.theme.sidebar.position, true);
        }
        this.translate.use(this.hexoConfig.language);
        this.lang = this.translate.currentLang;
        this.renderer.addClass(document.body, this.theme.scheme);
        const posts_links = this.hexoConfig.posts_links.map(value => (<Route>{
          path: value.link,
          component: PageComponent,
          data: {isIndex: false, json: value.path}
        }));
        const pages_links = this.hexoConfig.pages_links.map(value => (<Route>{
          path: value.link,
          component: PostPageComponent,
          data: {json: value.path},
        }));
        this.router.config.unshift(...posts_links, ...pages_links);
        this.router.initialNavigation();
      })
    ).subscribe();
  }
}
