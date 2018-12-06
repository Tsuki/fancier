import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostPageComponent} from './views/post/post-page.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ArticleComponent} from './views/article/article.component';
import {PageComponent} from './views/page/page.component';
import {CategoryComponent} from './views/category/category.component';
import {TagComponent} from './views/tag/tag.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  }, {
    path: 'archives',
    component: ArticleComponent
  }, {
    path: 'categories',
    component: CategoryComponent
  }, {
    path: 'tags',
    component: TagComponent
  }, {
    path: 'about',
    component: PostPageComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
