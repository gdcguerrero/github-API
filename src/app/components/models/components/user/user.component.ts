import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthService } from 'src/app/services/service/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public apiGit!: any;
  
  constructor(public http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.authService.apiGitUser().subscribe(resp => this.apiGit=resp)
  }
}