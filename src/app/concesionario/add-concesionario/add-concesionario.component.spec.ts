import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcesionarioComponent } from './add-concesionario.component';

describe('AddConcesionarioComponent', () => {
  let component: AddConcesionarioComponent;
  let fixture: ComponentFixture<AddConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
