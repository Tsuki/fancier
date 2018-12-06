import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ArchiveComponent} from './views/archive/archive.component';
import {PageComponent} from './views/page/page.component';
import {CategoryComponent} from './views/category/category.component';
import {TagComponent} from './views/tag/tag.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent, data: {isIndex: true}
  }, {
    path: 'archives',
    component: ArchiveComponent
  }, {
    path: 'categories',
    component: CategoryComponent
  }, {
    path: 'tags',
    component: TagComponent
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
