import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {RequestCache} from "../service/request-cache.service";


@Injectable({
  providedIn: 'root'
})
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next);
  }

  sendRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // No headers allowed in npm search request
    const noHeaderReq = req.clone({headers: new HttpHeaders()});

    return next.handle(noHeaderReq).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          this.cache.put(req, event); // Update the cache.
        }
      })
    );
  }
}
