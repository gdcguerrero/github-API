import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/service/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  public loginForm!: FormGroup;
  public error! : string;

  constructor(public authService: AuthService, public formBuilder: FormBuilder, private router: Router) {
    this.authService.getSession(); } //comprobar que este dentro de la sesion

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user : new FormControl ('',Validators.required),
      password : new FormControl ('',Validators.required)
    })
  }

  onSubmit(){
    //Obtener datos del login
    let user: string = this.loginForm.get('user')?.value;
    let password: string = this.loginForm.get('password')?.value;
    //Validado usuario
    if(!this.authService.authUser(user, password)){
      this.error = 'User or Password incorrect';
    } else {
      this.authService.setLogin()
      Swal.fire(
        `wellcome ${user}`
      )
    }
  }

  
}
