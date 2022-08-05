import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styles: [],
})
export class ObservablesComponent {

  myPromisse(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (name === "Rodrigo") {
        setTimeout(() => {
          resolve("Welcome: " + name);
        }, 1000);
      } else {
        reject("Ops...");
      }
    });
  }

  myObservable(name: string): Observable<string> {
    return new Observable(Subscriber => {
      if (name === 'Rodrigo') {
        Subscriber.next('Olá ' + name);
        setTimeout(() => {
          Subscriber.next('1');
        }, 1000);
        setTimeout(() => {
          Subscriber.next('2');
        }, 2000);
        setTimeout(() => {
          Subscriber.next('3');
        }, 3000);
        setTimeout(() => {
          Subscriber.next('4');
        }, 4000);
        setTimeout(() => {
          Subscriber.complete(); // Ao colocar o complete antes de 5 segundos, ele interrompe a chamada do  5
        }, 4500);
        setTimeout(() => {
          Subscriber.next('5');
        }, 5000);
      } else {
        Subscriber.error('Ops...deu erro na observable!!!');
      }
    });
  }

  promiseName(name: string) {
    this.myPromisse(name)
    .then(result => console.log(result))
     .catch(error => console.log(error))
  }

  observableName(name: string) {
    this.myObservable(name)
      .subscribe(
        result => console.log(result),
        error => console.log(error),
        () => console.log('Complete do observable'));
  }

  observer() {
    return {
      next: (value: any) => console.log('Next: ', value),
      error: (erro: any) => console.log('Error: ', erro),
      complete: () => console.log('Complete do observer!')
    }    
  }

  observerSuccess() {
    const obs = this.myObservable('Rodrigo');
    const subs = obs.subscribe(this.observer())

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão fechada: ', subs.closed);
    }, 3500); // Ao colocar esse tempo de 3,5 segundos, ele termina no 3 e não executa nem o complete
  }

  observerError() {
    const obs = this.myObservable('Other');
    obs.subscribe(this.observer());
  }
  
}
