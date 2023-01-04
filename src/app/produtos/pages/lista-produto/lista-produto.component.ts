import { Component, OnInit } from '@angular/core';

import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      );
  }

  venderProduto(event: Produto): void {
    if (!event.promocao) return;
     event.promocao = false;

     alert("Produto Vendido!");
  }
}
