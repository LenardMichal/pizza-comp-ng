import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanesCollectionComponent } from './panes-collection.component';

describe('PanesCollectionComponent', () => {
  let component: PanesCollectionComponent;
  let fixture: ComponentFixture<PanesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanesCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
