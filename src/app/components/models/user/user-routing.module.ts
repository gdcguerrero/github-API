import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { ReposComponent } from '../components/repos/repos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'repository',
        component: ReposComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }