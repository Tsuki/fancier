import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from './components/header/header.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CachingInterceptor} from "./http-interceptors/caching-interceptor";
import {RequestCache, RequestCacheWithMap} from "./service/request-cache.service";
import {ApiService} from "./service/api.service";
import {PostComponent} from './views/post/post.component';
import {ArticleComponent} from './views/article/article.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {CategoryComponent} from './views/category/category.component';
import {PageComponent} from './views/page/page.component';
import {TagComponent} from './views/tag/tag.component';
import { SiteNavComponent } from './components/header/site-nav/site-nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

library.add(fas);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    ArticleComponent,
    NotFoundComponent,
    CategoryComponent,
    PageComponent,
    TagComponent,
    SiteNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService,
    {provide: RequestCache, useClass: RequestCacheWithMap},
    {provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
