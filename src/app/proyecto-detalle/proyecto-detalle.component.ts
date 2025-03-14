import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../compartido/proyecto';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {
  proyecto: Proyecto | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.proyecto$.subscribe((proyecto) => {
      if (proyecto) {
        this.proyecto = proyecto;
      } else {
        this.router.navigate(['/']); 
      }
    });

    console.log(this.proyecto);
  }

  volver()
  {
    this.router.navigate(['/projects']);
  }

  abrirEnNuevaVentana(): void {
    if (this.proyecto && this.proyecto.urldireccion) {
      window.open(this.proyecto.urldireccion, '_blank');
    }
  }
}
