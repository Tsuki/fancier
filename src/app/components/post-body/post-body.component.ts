import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/app/model/site-config.class";
import {Post} from "~/app/model/posts-list.class";
import * as striptags from 'striptags';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.styl']
})
export class PostBodyComponent implements OnInit, AfterViewInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;
  @Input() post: Post;
  @Input() isIndex: boolean;
  auto_excerpt = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  get readMoreType() {
    // return 4;
    if (this.post.description && this.theme.excerpt_description) {
      return 1
    } else if (this.post.excerpt) {
      return 2
    } else if (this.theme.auto_excerpt.enable) {
      this.auto_excerpt = striptags(this.post.content);
      this.auto_excerpt = this.auto_excerpt.replace(/&#(\d+);/g, function (match, number) {
        return String.fromCharCode(number);
      });
      this.auto_excerpt = this.auto_excerpt.substring(0, this.theme.auto_excerpt.length);
      if (this.post.content.length > this.theme.auto_excerpt.length) {
        this.auto_excerpt += ' ...';
      }
      return 3
    } else {
      return 4
    }
  }

}
