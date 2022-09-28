import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  public user!: string;
  public password!: string;
  public token :string = '';
  
  closeSession(){
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
      }
    })
  }
  
  login(){
    this.auth = true
    localStorage.setItem('auth',this.auth.toString())
  }
  
  showSession(){
    this.auth = (localStorage.getItem('auth')?.toLocaleLowerCase() == 'true')
    return this.auth
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  }

  getToken(user:string, password:string) : boolean{
    if (user == 'gdcguerrero' && password == '1234') {
      this.token= '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'
      console.log(this.token);
    }
    return (this.token != '')
  }
}
