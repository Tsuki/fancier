import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {ApiService} from "~/service/api.service";
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {tap} from "rxjs/operators";
import {animate, group, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  animations: [
    trigger('header', [
      // state("0", style({opacity: 0, transform: 'translateY(-15%)'})),
      transition('* => 1', [
        query('.site-title', style({opacity: 0, transform: 'translateY(-30%)'})),
        query('.menu-item', style({opacity: 0})),
        query('.logo-line-before > i', style({transform: 'translateX(-100%)'})),
        query('.logo-line-after > i', style({transform: 'translateX(100%)'})),
        group([
          query('.logo-line-before > i', animate('500ms', style({transform: 'translateX(0)'}))),
          query('.logo-line-after > i', animate('500ms', style({transform: 'translateX(0)'}))),
        ]),
        query('.site-title', animate('500ms', style({opacity: 1, transform: 'translateY(0)'}))),
        query('.menu-item', stagger('200ms', [
          animate('.3s ease-in', style({opacity: 1, transform: 'translateY(0)'}))]))
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
