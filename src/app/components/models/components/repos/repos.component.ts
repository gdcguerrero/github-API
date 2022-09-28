import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/service/auth.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  private response: any;
  public apiGit!: any;

  constructor(public http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  closeSession(){
    this.authService.closeSession();
  }

  getData() {
    const api = 'https://api.github.com/user/repos';
    this.response = this.http.get(api).subscribe(resp => {
      this.apiGit = resp
      console.log(this.apiGit);
      return resp;
    })
  }
}