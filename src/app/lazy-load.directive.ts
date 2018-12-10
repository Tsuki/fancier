import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {
  @Output('appLazyLoad') public deferLoad: EventEmitter<boolean> = new EventEmitter();


  private _intersectionObserver?: IntersectionObserver;

  constructor(private _element: ElementRef) {
    this._intersectionObserver = new IntersectionObserver(this.checkForIntersection);
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
