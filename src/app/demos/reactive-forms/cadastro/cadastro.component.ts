import { fromEvent, merge, Observable } from "rxjs";
import { Usuario } from "./../../../models/usuario";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  ValidationMessages,
  GenericValidator,
  DisplayMessage,
} from "./generic-form-validation";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  usuario: Usuario;
  cadastroForm: FormGroup;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private readonly fb: FormBuilder) {
    this.validationMessages = {
      name: {
        required: "Campo obrigatório",
        minLength: "O Nome precisa ter pelo menos 3 caracteres",
        maxLength: "O Nome precisa ter no máximo 100 caracteres",
      },
      email: {
        required: "Campo obrigatório",
        email: "Email em formato inválido",
      },
      cpf: {
        required: "Campo obrigatório",
      },
      password: {
        required: "Campo obrigatório",
      },
      confirmPassword: {
        required: "Campo obrigatório",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      cpf: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
  }

  ngAfterViewInit(): void {
    //Interface que é chamada assim que a View 'HTML' já foi disponibilizado pelo browser
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, "blur")
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessage(
        this.cadastroForm
      );
    });
  }

  addUser() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    }
  }
}
