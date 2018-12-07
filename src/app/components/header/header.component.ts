import {AfterViewInit, Component, HostBinding, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

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

  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;
  @HostBinding('@header') useMotion;

  constructor() {
  }

  ngOnInit() {
    this.useMotion = this.theme.motion.enable
  }

  ngAfterViewInit(): void {
  }
}
