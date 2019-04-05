import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, Theme_config} from "~/app/model/site-config.class";
import {Post} from "~/app/model/posts-list.class";

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.styl']
})
export class PostFooterComponent implements OnInit {

  @Input() hexoConfig: HexoConfig;
  @Input() theme: Theme_config;
  @Input() post: Post;
  @Input() isIndex: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
