import { Usuario } from "./../../../usuarios/usuario";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  cadastroForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      name: [''],
      email: [''],
      cpf: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  addUser() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }
}
