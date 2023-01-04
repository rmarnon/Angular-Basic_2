import { Produto } from './../../../models/produto';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'produto-count',
    templateUrl: './produto-count.component.html'
})
export class ProcutoCountComponent {
    @Input() produtos: Produto[];

    contadorPromocao(): number {
        if (!this.produtos) return;

        return this.produtos.filter(x => x.promocao).length;
    }
}