import {Component, Input, OnInit} from '@angular/core';
import {Post} from "app/model/posts-list.class";
import {HexoConfig, Theme_config} from "app/model/site-config.class";
import * as moment from "moment";

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

  constructor() {
  }

  ngOnInit() {
    this.another_day = this.theme.post_meta.updated_at.another_day;
  }


  get isUpdated() {
    if (this.another_day) {
      return moment(this.post.date).isSame(moment(this.post.updated), 'day')
    } else {
      return moment(this.post.date).isSame(moment(this.post.updated))
    }
  }
}
