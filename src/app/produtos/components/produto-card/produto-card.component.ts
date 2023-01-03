import { Produto } from '../../../models/produto';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'produto-card',
    templateUrl: './produto-card.component.html'
})
export class ProdutoCardComponent {
    @Input() produto: Produto; 
}