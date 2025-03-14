import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselProyectosComponent } from './carrusel-proyectos.component';

describe('CarruselProyectosComponent', () => {
  let component: CarruselProyectosComponent;
  let fixture: ComponentFixture<CarruselProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselProyectosComponent]
    });
    fixture = TestBed.createComponent(CarruselProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
