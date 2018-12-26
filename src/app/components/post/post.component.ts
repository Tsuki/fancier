import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "app/model/site-config.class";
import {Post} from "app/model/posts-list.class";

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

  constructor() {

  }

  async ngOnInit() {
  }


}
