import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './cursosmodel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]>
  //cursos: Curso[]

  constructor(
    private cursosservices : CursosService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosservices.get()
  }

}
