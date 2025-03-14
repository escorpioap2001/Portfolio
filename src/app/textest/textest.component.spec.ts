import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextestComponent } from './textest.component';

describe('TextestComponent', () => {
  let component: TextestComponent;
  let fixture: ComponentFixture<TextestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextestComponent]
    });
    fixture = TestBed.createComponent(TextestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
