import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nat-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.styl'],
  encapsulation: ViewEncapsulation.Native
})
export class PictureComponent implements OnInit, AfterViewInit {
  @Input('webp') isWebp = true;
  @Input() src = '';
  @Input() alt = '';
  deferLoad: EventEmitter<boolean> = new EventEmitter();
  filename = '';
  srcset_webp = '';
  srcset_ori = '';
  type_ori = '';
  private _intersectionObserver?: IntersectionObserver;
  mime = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    bmp: 'image/bmp',
  };

  constructor(private _element: ElementRef<HTMLPictureElement>) {
    this._intersectionObserver = new IntersectionObserver(this.checkForIntersection);

  }

  ngOnInit() {
    const path = this.src.split('||');
    this.src = path[0];
    this.alt = path[1] || this.alt || 'placeholder';
    const pos = this.src.lastIndexOf(".");
    const ext = this.src.split('.').pop();
    this.type_ori = this.mime[ext];
    const src_path = this.src.substr(0, pos);


    this.srcset_ori = [`${src_path}-small.${ext} 460w`, `${src_path}-large.${ext} 720w`, `${src_path}.${ext}`].join(', ');
    this.srcset_webp = [`${src_path}-small.webp 460w`, `${src_path}-large.webp 720w`, `${src_path}.webp`].join(', ');
  }

  ngAfterViewInit(): void {
    this._intersectionObserver.observe(this._element.nativeElement);
  }

  //
  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.deferLoad.emit(true);
        this._intersectionObserver.unobserve(this._element.nativeElement);
        this._intersectionObserver.disconnect()
      }
    });
  };
}
