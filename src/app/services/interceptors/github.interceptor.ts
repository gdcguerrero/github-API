import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class GithubInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token : string = this.authService.token;
    if (token == '') {
      return next.handle(request)
    }
    request = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${token}`)
    })
    return next.handle(request);
  }
}
