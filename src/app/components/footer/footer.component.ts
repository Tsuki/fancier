import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/app/model/site-config.class";
import {format} from 'date-fns'
import {environment} from '~/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {
  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;
  current = format(new Date(), 'YYYY');
  version = environment.version;

  constructor() {
  }

  ngOnInit() {
  }

}
