import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {Post} from "~/model/posts-list.class";

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.styl']
})
export class PostBodyComponent implements OnInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: ThemeConfig;
  @Input() post: Post;
  @Input() isIndex: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
