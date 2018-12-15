import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.styl']
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
    const pos = this.src.lastIndexOf(".");
    const ext = this.src.split('.').pop();
    this.srcset_ori = this.src;
    this.type_ori = this.mime[ext];
    console.log(this.src);
    this.srcset_webp = this.src.substr(0, pos) + ".webp";
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
