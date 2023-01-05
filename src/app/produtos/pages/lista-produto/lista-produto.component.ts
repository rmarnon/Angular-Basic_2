import { fromEvent, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
    alert(this.contador.contadorPromocao());

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
