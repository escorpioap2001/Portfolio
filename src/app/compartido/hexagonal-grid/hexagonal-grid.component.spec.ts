import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalGridComponent } from './hexagonal-grid.component';

describe('HexagonalGridComponent', () => {
  let component: HexagonalGridComponent;
  let fixture: ComponentFixture<HexagonalGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexagonalGridComponent]
    });
    fixture = TestBed.createComponent(HexagonalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
