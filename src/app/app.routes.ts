import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/pages/lista-produto/lista-produto.component';
import { ObservablesComponent } from './demos/observables/observables.component';
import { NgModule } from '@angular/core';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', loadChildren: () => import('../app/produtos/produto.module').then(x => x.ProdutoModeule) },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent },
    { path: 'observables', component: ObservablesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}