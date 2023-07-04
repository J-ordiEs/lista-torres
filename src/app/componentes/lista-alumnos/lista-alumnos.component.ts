import { Component } from '@angular/core';
import { Alumno } from 'src/app/alumno';
import { ALUMNOS } from 'src/app/mock-alumnos';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {

  alumnos = ALUMNOS;
  selectedAlumno?: Alumno;  

  onSelect(alumno:Alumno){
    this.selectedAlumno = alumno;
  }

}
