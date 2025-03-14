import { Component } from '@angular/core';
import { Proyecto } from '../compartido/proyecto';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  proyectos: Proyecto[] = [];
  constructor(private translate: TranslateService) {
    this.cargarProyectos();

    this.translate.onLangChange.subscribe(() => {
      this.cargarProyectos();
    });
  }

  cargarProyectos() {
    this.proyectos = [
      {
        titulo: 'Primer portfolio sobre animación',
        urlimagen: '../../assets/images/proyecto1.png',
        urldireccion: 'https://mural.uv.es/palpu/portfolio/inicio.html',
        descripcion: `Uno de mis primeros proyectos web durante mi carrera que surgio para generar
                    un portfolio donde se pudier demostrar mis habilidades en animación , 
                    combinando HTML y CSS para crear una experiencia visual sobre mis conocimientos.</br> 
                    El objetivo era construir una plataforma donde pudiera mostrar mis futuras creaciones 
                    y progresos en el ámbito de la animación digital, sin hacer uso de backend.`,

        urlstecnologias: [
          '../../assets/images/iconos/html.png',
          '../../assets/images/iconos/css.png',
        ],
      },
      {
        titulo: 'Proyecto 2',
        urlimagen: '../../assets/images/pokeball.png',
        urldireccion: 'https://mural.uv.es/palpu/portfolio/inicio.html',
        descripcion: 'Descripción del Proyecto 2',
        urlstecnologias: [
          '../../assets/images/pokeball.png',
          '../../assets/images/pokeball.png',
        ],
      },
      {
        titulo: 'Proyecto 3',
        urlimagen: '../../assets/images/pokeball.png',
        urldireccion: 'https://mural.uv.es/palpu/portfolio/inicio.html',
        descripcion: 'Descripción del Proyecto 3',
        urlstecnologias: [
          '../../assets/images/pokeball.png',
          '../../assets/images/pokeball.png',
        ],
      },
    ];
  }
}
