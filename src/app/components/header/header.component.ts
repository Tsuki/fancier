import {Component, OnInit} from '@angular/core';
import {ApiService} from "~/service/api.service";
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  hexoConfig: HexoConfig;
  theme: ThemeConfig;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config)
    ).subscribe();
  }

}
