import {Component, Input, OnInit} from '@angular/core';
import {Post} from "~/model/posts-list.class";
import {HexoConfig, Theme_config} from "~/model/site-config.class";

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

  constructor() {
  }

  ngOnInit() {
  }


}
