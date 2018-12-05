import {Component, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ApiService} from "./service/api.service";
import {tap} from "rxjs/operators";
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'fancier';
  hexoConfig: HexoConfig;
  theme: ThemeConfig;


  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private api: ApiService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('default');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ja');
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'container');
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
      tap(() => this.title = this.hexoConfig.title),
      tap(() => {
        if (this.theme.sidebar.position)
          this.renderer.addClass(document.body, 'sidebar-position-' + this.theme.sidebar.position);
        this.renderer.addClass(document.body, this.theme.scheme)
      })
    ).subscribe();
  }
}
