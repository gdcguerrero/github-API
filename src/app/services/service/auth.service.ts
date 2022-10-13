import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  public token: string = '';

  constructor(private http: HttpClient, private router: Router) {

  }

  closeSession() {
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, exit'
    }).then((result) => {
      if (result.isConfirmed) {
        this.auth = false
        localStorage.clear();
        Swal.fire(
          'Ok',
          '',
          'success'
        )
        this.router.navigate(["/index"])
      }
    })
  }

  setLogin() {
    this.auth = true
    localStorage.setItem('auth', this.auth.toString())
    this.router.navigate(["/apiLazy/user"])
  }

  getSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    if (this.auth) {
      this.router.navigate(["/apiLazy/user"])
    }
  }

  showSession(): boolean {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true')
    return this.auth
  }

  getToken(user: string, password: string): boolean {
    if (true) { //user == 'gdcguerrero' && password == '1234'
      this.token = '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'
    }
    return (this.token != '')
  }

  apiGitUser(): Observable<any> {
    return this.http.get('https://api.github.com/user')
  }

  apiGitRepos(): Observable<any> {
    return this.http.get('https://api.github.com/user/repos')
  }

}
