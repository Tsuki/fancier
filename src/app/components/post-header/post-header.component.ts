import {Component, Input, OnInit} from '@angular/core';
import {Post} from "app/model/posts-list.class";
import {HexoConfig, Theme_config} from "app/model/site-config.class";
import {format, isSameDay, isSameSecond} from "date-fns";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.styl']
})
export class PostHeaderComponent implements OnInit {

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
      return isSameDay(this.post.date, this.post.updated)
    } else {
      return isSameSecond(this.post.date, this.post.updated)
    }
  }

  get timeTileCreated() {
    return `${this.transCreated}${this.transColon}${format(this.post.date)}`;
  }

  get timeTileModified() {
    return `${this.transModified}${this.transColon}${format(this.post.updated)}`
  }


}
