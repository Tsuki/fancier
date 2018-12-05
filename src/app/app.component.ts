import {Component, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ApiService} from './service/api.service';
import {tap} from 'rxjs/operators';
import {HexoConfig, ThemeConfig} from '~/model/hexo-config.class';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: ThemeConfig;
  bodyClass: any = {container: true};
  lang = 'default';


  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private titleService: Title,
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
          this.bodyClass['sidebar-position-' + this.theme.sidebar.position] = true;
        }
        this.translate.use(this.hexoConfig.language);
        this.lang = this.translate.currentLang;
        this.renderer.addClass(document.body, this.theme.scheme);
      })
    ).subscribe();
  }

  setPageClass(className: string) {
    this.bodyClass['page-home'] = className === 'page-home';
    this.bodyClass['page-post-detail'] = className === 'page-post-detail';
    this.bodyClass['page-archive'] = className === 'page-archive';
  }
}
