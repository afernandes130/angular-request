import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/cursosmodel';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly api : string =  `${environment.API}cursos`
  

  constructor(
    private http : HttpClient
    ) { }

    get(){
      return this.http.get<Curso[]>(this.api)
      .pipe(
        delay(2000),
        tap(console.log)
      );
    }
}
