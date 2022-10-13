import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Constants } from 'src/app/utils/constants.class'

@Injectable()
export class GithubInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone(
      {
        setHeaders: {
          Authorization: 'Bearer ' + Constants.token
        }
      }
    )
    return next.handle(request)
  }
}