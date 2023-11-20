import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { StateService } from '../state/state.service';


interface Usuario {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  formIngresarUsuario: FormGroup;
  usuario: Usuario = {
    email: '',
    password: ''
  }


  constructor(private fb: FormBuilder, private stateService: StateService) {
    //inicializar el formulario reactivo
      this.formIngresarUsuario = fb.group({
        email: [''],
        password: ['']
      });
   }

  ngOnInit() {
  }



  login() {
    console.log('login');
    const usuario = {
      email : this.formIngresarUsuario.get('email')?.value,
      password : this.formIngresarUsuario.get('password')?.value
    }
    //setear en el state el usuario
    this.usuario = usuario;
    this.stateService.setEmail(this.usuario.email);
    this.stateService.setPassword(this.usuario.password);
    
  }

  onSave(): void {
    console.log(this.formIngresarUsuario.value);
  }

}
