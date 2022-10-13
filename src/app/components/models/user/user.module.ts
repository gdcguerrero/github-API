import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserComponent } from '../components/user/user.component'
import { UserRoutingModule } from './user-routing.module'
import { ReposComponent } from '../components/repos/repos.component'

@NgModule({
  declarations: [
    UserComponent,
    ReposComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
