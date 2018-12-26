import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as util from "util";
import {sprintf} from 'sprintf-js';

@Pipe({name: 'trans'})
export class TransPipe implements PipeTransform {

  constructor(private translate: TranslateService,) {
  }


  async transform(value: any, args?: any): any {
    const result = await this.translate.get(value).toPromise();
    if (args === undefined) {
      return result;
    } else if (util.isArray(args)) {
      return sprintf(result, ...args)
    } else if (util.isObject(result) && util.isNumber(args)) {
      switch (args) {
        case 0:
          return sprintf(result['zero'], args);
        case 1:
          return sprintf(result['one'], args);
        default:
          return sprintf(result['other'], args);
      }
    } else {
      return sprintf(result, args)
    }
  }
}
