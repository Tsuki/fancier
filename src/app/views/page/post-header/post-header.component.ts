import {Component, Input, OnInit} from '@angular/core';
import {Post} from "~/model/posts-list.class";
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.styl']
})
export class PostHeaderComponent implements OnInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: ThemeConfig;
  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

}
