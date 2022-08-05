import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      password: new FormControl(''),            
      confirmPassword: new FormControl(''),            
    });
  }

  addUser() {
    let form = this.cadastroForm.value;
  }

}
