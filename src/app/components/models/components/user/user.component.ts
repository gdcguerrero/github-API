import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  private response: any;
  public username!: any;
  public img: string ='https://avatars.githubusercontent.com/u/65260943?v=4'
  
  constructor(public http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  closeSession(){
    this.authService.closeSession();
  }

  getData() {
    const user = 'https://api.github.com/user';
    let response = this.http.get(user).subscribe(resp => {
      this.username = resp
      console.log(this.username);
      return resp;
    })
  }
}