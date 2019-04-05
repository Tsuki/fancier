import {Component, Input, OnInit} from '@angular/core';
import {Post} from "~/app/model/posts-list.class";
import {HexoConfig} from "~/app/model/site-config.class";

@Component({
  selector: 'app-post-collapse',
  templateUrl: './post-collapse.component.html',
  styleUrls: ['./post-collapse.component.styl']
})
export class PostCollapseComponent implements OnInit {
  @Input() post: Post;
  @Input() config: HexoConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
