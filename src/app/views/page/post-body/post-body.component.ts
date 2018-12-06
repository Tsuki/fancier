import {Component, Input, OnInit} from '@angular/core';
import {HexoConfig, ThemeConfig} from "~/model/hexo-config.class";
import {Post} from "~/model/posts-list.class";
import {Lightbox} from "ngx-lightbox";
import {IAlbum} from "ngx-lightbox/lightbox-event.service";
import * as striptags from 'striptags';

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
  albums: IAlbum[] = [];
  auto_excerpt = '';

  constructor(
    private lightbox: Lightbox
  ) {
  }

  ngOnInit() {
    this.albums = this.post.photos.map(value => <IAlbum>{src: value})
  }

  open(index: number): void {
    this.lightbox.open(this.albums, index);
  }

  get readMoreType() {
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
