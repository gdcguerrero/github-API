import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/service/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  loginForm!: FormGroup;
  error! : string;

  constructor(public authService: AuthService, public formBuilder: FormBuilder) {
    this.authService.setSession(); }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user : new FormControl ('',Validators.required),
      password : new FormControl ('',Validators.required)
    })
  }

  login(){
    this.authService.login()
  }
  closeSession(){
    this.authService.closeSession()
  }
  showSession(){
    return this.authService.showSession()
  }

  onSubmit(){
    let user: string = this.loginForm.get('user')?.value;
    let password: string = this.loginForm.get('password')?.value;

    if(!this.authService.getToken(user, password)){
      this.error = 'Usuario incorrecto';
    } else {
      this.error = '';
      this.login()
      Swal.fire(
        `wellcome ${user}`
      )
    }
  }

  
}
