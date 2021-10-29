import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCitasComponent } from './create-citas.component';

describe('CreateCitasComponent', () => {
  let component: CreateCitasComponent;
  let fixture: ComponentFixture<CreateCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
