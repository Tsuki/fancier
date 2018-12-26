import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ArchiveComponent} from './views/archive/archive.component';
import {PageComponent} from './views/page/page.component';
import {CategoryComponent} from './views/category/category.component';
import {TagComponent} from './views/tag/tag.component';

const routes: Routes = [
  {
    path: '',
    data: {isIndex: true},
    children: [
      {path: '', component: PageComponent},
      {path: 'page/:page', component: PageComponent}
    ],
  }, {
    path: 'archives',
    children: [
      {path: '', component: ArchiveComponent},
      {path: 'page/:page', component: ArchiveComponent}
    ],
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
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
