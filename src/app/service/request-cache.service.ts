import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse} from "@angular/common/http";

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;

  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void
}

@Injectable({
  providedIn: 'root'
})
export class RequestCacheWithMap implements RequestCache {
  maxAge = 30000;
  cache: Map<string, RequestCacheEntry>;

  constructor() {
    this.cache = new Map();
  }

  setMaxAge(maxAge: number) {
    this.maxAge = maxAge;
  }


  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);
    if (!cached) {
      return undefined;
    }
    const isExpired = cached.lastRead < (Date.now() - this.maxAge);
    if (isExpired) {
      this.cache.delete(url);
      return undefined;
    }
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.url;
    const entry = {url, response, lastRead: Date.now()};
    this.cache.set(url, entry);
    // const expired = Date.now() - this.maxAge;
    // this.cache.forEach(expiredEntry => {
    //   if (expiredEntry.lastRead < expired) {
    //     this.cache.delete(expiredEntry.url);
    //   }
    // });
  }
}
