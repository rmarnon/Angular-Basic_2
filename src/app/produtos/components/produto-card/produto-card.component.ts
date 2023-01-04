import { Produto } from '../../../models/produto';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'produto-card',
    templateUrl: './produto-card.component.html'
})
export class ProdutoCardComponent {
    @Input() produto: Produto; 
    @Output() promocao: EventEmitter<Produto> = new EventEmitter();

    emitirEvento(): void {
        this.promocao.emit(this.produto);
    }
}