import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  usuario: Usuario;
  cadastroForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      password: ['', Validators.required],            
      confirmPassword: ['', Validators.required],            
    });
  }

  addUser() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);      
    }
  }

  validateForm(value: string) {
     return this.cadastroForm.get(value).errors && 
      (this.cadastroForm.get(value).dirty || this.cadastroForm.get(value).touched)
  }
}
