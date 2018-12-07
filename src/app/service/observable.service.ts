import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  bodyClass = new BehaviorSubject<{}>({container: true});

  constructor() {
  }

  addBodyClass(ket: string, value: boolean) {
    const newClass = Object.assign(this.bodyClass.getValue(), {[ket]: value});
    this.bodyClass.next(newClass);
  }

  setPageClass(className: string) {
    const pageClass = {
      'page-home': className === 'page-home',
      'page-post-detail': className === 'page-post-detail',
      'page-archive': className === 'page-archive',
    };
    const newClass = Object.assign(this.bodyClass.getValue(), pageClass);
    this.bodyClass.next(newClass);
  }

}
