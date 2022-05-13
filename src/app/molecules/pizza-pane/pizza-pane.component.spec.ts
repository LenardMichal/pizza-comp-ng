import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPaneComponent } from './pizza-pane.component';

describe('PizzaPaneComponent', () => {
  let component: PizzaPaneComponent;
  let fixture: ComponentFixture<PizzaPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
