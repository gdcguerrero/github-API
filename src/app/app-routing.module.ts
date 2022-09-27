import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch : 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
    pathMatch : 'full'
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
