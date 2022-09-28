import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  public name!: string;
  public password!: string;
  public token :string = '';
  
  closeSession(){
    this.auth = false
    localStorage.clear();
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

  getToken(usaer:string, password:string) : boolean{
    if (usaer == 'gdcguerrero' && password == '1234') {
      this.token= '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'
    }
    return (this.token != '')
  }
}
