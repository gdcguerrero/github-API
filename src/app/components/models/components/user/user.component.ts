import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  response: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const api = 'https://api.github.com/user/repos';
    this.response = this.http.get(api).subscribe(resp => {
      console.log(resp);
      console.log(this.response);
      return resp;
    })
  }
}