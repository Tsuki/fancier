import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
import {Utils} from "~/utils/utils";
import {slideInOutAnimation} from "~/utils/animation";

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.styl'],
  animations: [...slideInOutAnimation]

})
export class SiteNavComponent implements OnInit {


  @Input() navClassOn: boolean;
  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;

  constructor() {
  }

  ngOnInit() {
  }


  noOrder = Utils.noOrder

}
