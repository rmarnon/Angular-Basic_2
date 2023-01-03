import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './pages/lista-produto/lista-produto.component';

const produtoRouterConfig: Routes = [
    {path: '', component: ListaProdutoComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig),
    ],
    exports: [RouterModule]
})
export class ProdutoRountingModule {}