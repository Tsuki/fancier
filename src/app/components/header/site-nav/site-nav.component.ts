import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/app/model/site-config.class";
import {Utils} from "~/app/utils/utils";
import {slideInOutAnimation} from "~/app/utils/animation";

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
