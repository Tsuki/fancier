import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
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
  @Input() theme: Theme_config;

  ngOnInit() {
  }

  noOrder = Utils.noOrder

}
