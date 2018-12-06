import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {Post} from "~/model/posts-list.class";
import moment = require("moment");

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent implements OnInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: ThemeConfig;
  @Input() post: Post;
  @Input() isIndex: boolean;
  another_day: boolean

  constructor() {

  }

  ngOnInit() {
    this.another_day = this.theme.post_meta.updated_at.another_day
  }

  get isUpdated() {
    if (this.another_day) {
      return moment(this.post.date).isSame(moment(this.post.updated), 'day')
    } else {
      return moment(this.post.date).isSame(moment(this.post.updated))
    }
  }

}
