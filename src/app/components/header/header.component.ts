import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {ApiService} from "~/service/api.service";
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {tap} from "rxjs/operators";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  animations: [
    trigger('header', [
      // state("0", style({opacity: 0, transform: 'translateY(-15%)'})),
      transition(':enter', [
        query('*', style({opacity: 0, transform: 'translateY(-15%)'}), { optional: true }),
        // query('.site-title', style({transform: 'translateY(-15%)'})),
        query('span.site-title', animate('2s', style({opacity: 1, transform: 'translateY(0)'})), {optional: true}),
        query('.menu-item', stagger('2s', [
          animate('.3s ease-in', style({opacity: 1, transform: 'translateY(0)'}))
        ]), { optional: true })
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hexoConfig: HexoConfig;
  theme: ThemeConfig;

  @HostBinding('@header')
  useMotion = false;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.fetchHexoConfig().pipe(
      tap(value => this.hexoConfig = value),
      tap(() => this.theme = this.hexoConfig.theme_config),
      tap(() => this.useMotion = this.theme.motion.enable)
    ).subscribe();
  }

  ngAfterViewInit(): void {
  }
}
