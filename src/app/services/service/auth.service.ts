import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Constants } from 'src/app/utils/constants.class'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;

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
        localStorage.clear()
        Swal.fire(
          'Ok',
          '',
          'success'
        )
        this.router.navigate(["login"])
      }
    })
  }

  setLogin() {
    localStorage.setItem('auth', this.auth.toString())
    this.router.navigate(["/apiLazy/user"])
  }

  getSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true')
    if (this.auth) {
      this.router.navigate(["/apiLazy/user"])
    }
  }

  showSession(): boolean {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true')
    return this.auth
  }

  authUser(user: string, password: string): boolean {
    if (user == 'gdcguerrero' && password == '1234') {
      return this.auth=true
    }
    return this.auth
  }

  apiGitUser(): Observable<any> {
    return this.http.get(Constants.api)
  }

  apiGitRepos(): Observable<any> {
    return this.http.get(Constants.api+'/repos')
  }

}
