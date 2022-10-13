import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/service/auth.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  public apiGit!: any
  public index: number = 0

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.apiGitRepos()
  }

  apiGitRepos() {
    this.authService.apiGitRepos().subscribe(resp => this.apiGit=resp)
  }

  indexI(i: number){
    this.index = i
  }
}