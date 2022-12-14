import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { NotFoundComponent } from './components/shared/not-found/not-found.component'
import { IndexComponent } from './components/index/index.component'
import { FooterComponent } from './components/footer/footer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { GithubInterceptor } from './services/interceptors/github.interceptor'
import { UserModule } from './components/models/user/user.module'
import { FechaPipe } from './components/footer/libs/pipe/fecha/fecha.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    IndexComponent,
    FooterComponent,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
