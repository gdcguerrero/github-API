import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiResolver implements Resolve<any> {
  
  constructor(private http: HttpClient) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const token: number = route.params['id'];
    const url = `https://api.github.com/user/repos/${token}`;
    return this.http.get(url);
  }
}
