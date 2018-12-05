import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {Utils} from "~/utils/utils";

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.styl']
})
export class SiteNavComponent implements OnInit {

  constructor() {
  }

  @Input() hexoConfig: HexoConfig;
  @Input() theme: ThemeConfig;

  ngOnInit() {
  }

  noOrder = Utils.noOrder

}
