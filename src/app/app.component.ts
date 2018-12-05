import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'fancier';

  constructor(
    private translate: TranslateService,
    private api: ApiService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('default');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ja');
  }

  ngOnInit(): void {
    this.api.fetchHexoConfig().subscribe();
  }
}
