import { ProdutoCardComponent } from './components/produto-card/produto-card.component';
import { ProdutoRountingModule } from './produto.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ListaProdutoComponent } from './pages/lista-produto/lista-produto.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';
registerLocaleData(localePt);


@NgModule({
    declarations: [
        ListaProdutoComponent,
        ProdutoCardComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoRountingModule
    ],
    exports: [],
})
export class ProdutoModeule {}