import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FaIconService, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from './components/header/header.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faArchive,
  faChartArea,
  faChevronLeft,
  faChevronRight,
  faCoffee,
  faExternalLinkAlt,
  faHome,
  faTh,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {CachingInterceptor} from './http-interceptors/caching-interceptor';
import {RequestCache, RequestCacheWithMap} from './service/request-cache.service';
import {ApiService} from './service/api.service';
import {PostPageComponent} from './views/post-page/post-page.component';
import {ArchiveComponent} from './views/archive/archive.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {CategoryComponent} from './views/category/category.component';
import {PageComponent} from './views/page/page.component';
import {TagComponent} from './views/tag/tag.component';
import {SiteNavComponent} from './components/header/site-nav/site-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SafePipe} from './pipe/safe.pipe';
import {PostHeaderComponent} from './components/post-header/post-header.component';
import {PostComponent} from './components/post/post.component';
import {PostBodyComponent} from './components/post-body/post-body.component';
import {faCalendarAlt, faCalendarCheck, faComment, faFolder} from "@fortawesome/free-regular-svg-icons";
import {ArticleComponent} from './views/article/article.component';
import {FooterComponent} from './components/footer/footer.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {DISQUS_SHORTNAME, DisqusModule} from "ngx-disqus";
import {LazyLoadDirective} from './lazy-load.directive';
import {SafeHtmlPipe} from './pipe/safe-html.pipe';
import {PostFooterComponent} from './components/post-footer/post-footer.component';
import {PostRelatedComponent} from './components/post-related/post-related.component';
import {PostCopyrightComponent} from './components/post-copyright/post-copyright.component';
import {PictureComponent} from './components/picture/picture.component';
import {createCustomElement} from "@angular/elements";
import {TransPipe} from './pipe/trans.pipe';
import {PostCollapseComponent} from './components/post-collapse/post-collapse.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '~/environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const COMPONENT = [
  AppComponent,
  HeaderComponent,
  PostPageComponent,
  ArchiveComponent,
  NotFoundComponent,
  CategoryComponent,
  PageComponent,
  TagComponent,
  SiteNavComponent,
  SafePipe,
  PostHeaderComponent,
  PostComponent,
  PostBodyComponent,
  ArticleComponent,
  FooterComponent,
  PaginatorComponent,
  LazyLoadDirective,
  SafeHtmlPipe,
  PostFooterComponent,
  PostRelatedComponent,
  PostCopyrightComponent,
  PictureComponent
];

@NgModule({
  declarations: [
    ...COMPONENT,
    TransPipe,
    PostCollapseComponent
  ],
  entryComponents: [
    ArticleComponent,
    PostPageComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    DisqusModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService,
    // TODO move to app init
    {provide: DISQUS_SHORTNAME, useValue: 'tsukiblog'},
    {provide: RequestCache, useClass: RequestCacheWithMap},
    {provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private faIconService: FaIconService, private injector: Injector) {
    const customButton = createCustomElement(PictureComponent, {injector: this.injector});
    customElements.define('nat-picture', <Function>customButton);
    library.add(faHome, faTh, faArchive, faUser,
      faCalendarAlt, faCalendarCheck, faFolder, faComment,
      faAngleLeft, faAngleRight, faChartArea, faCoffee,
      faChevronLeft, faChevronRight, faExternalLinkAlt);
    this.faIconService.defaultPrefix = 'fas';
  }
}
