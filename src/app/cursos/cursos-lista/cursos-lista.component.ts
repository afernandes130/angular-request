import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './cursosmodel';
import { Observable, empty, Subject } from 'rxjs';
import { tap, catchError, } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]>
  valorrecebido : string;
  error$ = new Subject<boolean>();
  errormsg: string

  constructor(
    private cursosservices : CursosService
  ) { }

  ngOnInit(): void {
    this.AtualizaComponente()  
  }

  emitvalor(valor : string){
    this.cursosservices.emitirValor(valor);
    this.getvalor();
  }

  getvalor(){
        this.cursosservices.getValor()
    .pipe(tap(console.log))
    .subscribe(v => this.valorrecebido = v)
  }

  AtualizaComponente(){
    this.cursos$ = this.cursosservices.get()
    .pipe(
      catchError(error=> {
        this.error$.next(true);
        this.errormsg = error.message;
        return empty();
        }))
  }

}
