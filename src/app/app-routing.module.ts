import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostComponent} from "./views/post/post.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {ArticleComponent} from "./views/article/article.component";
import {PageComponent} from "./views/page/page.component";
import {CategoryComponent} from "./views/category/category.component";
import {TagComponent} from "./views/tag/tag.component";

const routes: Routes = [
  {
    path: '',
    component: PostComponent
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
    component: PageComponent
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
