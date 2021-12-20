import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'cicloObservableAppRxjs';

  constructor() {}

  ngOnInit(): void {
    //criando o observable e os passos de execução
    const constObjObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next("Dados 3");
      observer.next(4);
      observer.next("Dados 5");
      observer.next(true); //observer.error("Error ocorreu - Estudar quando utilizar?? cenarios");
      observer.complete();
    });

    //Se inscrevendo
    const subsObservable = constObjObservable.subscribe({

      next: res => console.log("Executando o next do observable: " + res), 
      error: err => console.log("Error: ", err),
      complete: () => console.log("Processo completado."),
    });

    //Desescrever

    console.log("Removendo inscrição!");
    subsObservable.unsubscribe();
    
  }

  ngOnDestroy(): void {
    
  }
}
