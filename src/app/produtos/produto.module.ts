import { ProdutoRountingModule } from './produto.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';


@NgModule({
    declarations: [
        ListaProdutoComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProdutoRountingModule
    ],
    exports: [],
})
export class ProdutoModeule {}