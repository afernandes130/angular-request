import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './cursosmodel';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]>
  valorrecebido : string;
  //cursos: Curso[]

  constructor(
    private cursosservices : CursosService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosservices.get()
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

}
