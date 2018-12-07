import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/model/site-config.class";
import {Post} from "~/model/posts-list.class";
import * as moment from 'moment';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'div[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent implements OnInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;
  @Input() post: Post;
  @Input() isIndex: boolean;
  another_day: boolean;
  transCreated = '';
  transModified = '';
  transColon = '';

  constructor(private translate: TranslateService) {

  }

  async ngOnInit() {
    this.another_day = this.theme.post_meta.updated_at.another_day;

    this.transCreated = await this.translate.get("post.created").toPromise();
    this.transModified = await this.translate.get("post.modified").toPromise();
    this.transColon = await this.translate.get("symbol.colon").toPromise();

  }

  get isUpdated() {
    if (this.another_day) {
      return moment(this.post.date).isSame(moment(this.post.updated), 'day')
    } else {
      return moment(this.post.date).isSame(moment(this.post.updated))
    }
  }

  get timeTileCreated() {
    return `${this.transCreated}${this.transColon}${moment(this.post.date).toISOString()}`;
  }

  get timeTileModified() {
    return `${this.transModified}${this.transColon}${moment(this.post.updated).toISOString()}`
  }

}
