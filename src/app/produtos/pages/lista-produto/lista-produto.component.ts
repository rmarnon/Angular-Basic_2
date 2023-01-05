import { ProdutoCardComponent } from './../../components/produto-card/produto-card.component';
import { fromEvent, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../produtos.service';
import { ProdutoCountComponent } from '../../components/produto-count/produto-count.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit, AfterViewInit {
  @ViewChild('lista', { static: false }) elemento: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;

  @ViewChildren(ProdutoCardComponent) produtoQuery: QueryList<ProdutoCardComponent>;

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

  ngAfterViewInit(): void {
    alert('Produtos em promoção: ' + this.contador.contadorPromocao());

    this.produtoQuery.forEach(p => {
      alert(p.produto.nome);
    });

    let clicou: Observable<any> = fromEvent(this.elemento.nativeElement, 'click');
    clicou.subscribe(() => {
      alert('Clicou!');
      return;
    })
  }

  venderProduto(event: Produto): void {
    if (!event.promocao) return;
    event.promocao = false;

    alert("Produto Vendido!");
  }
}
