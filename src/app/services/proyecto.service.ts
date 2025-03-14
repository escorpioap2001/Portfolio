import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../compartido/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private proyectoSeleccionado = new BehaviorSubject<Proyecto | null>(null);
  proyecto$ = this.proyectoSeleccionado.asObservable();

  setProyecto(proyecto: Proyecto): void {
    this.proyectoSeleccionado.next(proyecto);
  }
}
