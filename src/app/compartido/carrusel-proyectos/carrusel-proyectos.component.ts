import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-carrusel-proyectos',
  templateUrl: './carrusel-proyectos.component.html',
  styleUrls: ['./carrusel-proyectos.component.css']
})
export class CarruselProyectosComponent implements OnInit, OnDestroy {
  @Input() proyectos: Proyecto[] = [];
  currentIndex = 0;
  intervalId: any;
  animating_left = false;
  animating_right=false;

  constructor(private router: Router,private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  nextSlide(): void {
    if (!this.animating_left || !this.animating_right) {
      this.animating_right = true;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.proyectos.length;
        this.animating_right = false;
      }, 500);
      this.startAutoSlide();
    }
  }

  prevSlide(): void {
    if (!this.animating_left || !this.animating_right) {
      this.animating_left = true;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex - 1 + this.proyectos.length) % this.proyectos.length;
        this.animating_left = false;
      }, 500);
      this.startAutoSlide();
    }
  }

  verProyecto(index: number): void {
    this.proyectoService.setProyecto(this.proyectos[index]);
    this.router.navigate([`/project/${index}`], { state: { proyecto: this.proyectos[index] } });
  }
}
