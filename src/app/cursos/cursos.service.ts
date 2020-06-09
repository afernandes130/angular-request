import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/cursosmodel';
import { tap, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly api : string =  `${environment.API}cursos`
  private subject$ = new Subject<string>();
  

  constructor(
    private http : HttpClient
    ) { }

    get(){
      return this.http.get<Curso[]>(this.api)
      .pipe(
        delay(1000),
        tap(console.log)
      );
    }

    emitirValor(valor : string){
      console.log("emitiu");
      
      this.subject$.next(valor)
    }

    getValor(){
      return this.subject$.asObservable()
    }
}
