import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioPerezComponent } from './iniciar-sessio-perez.component';

describe('IniciarSessioPerezComponent', () => {
  let component: IniciarSessioPerezComponent;
  let fixture: ComponentFixture<IniciarSessioPerezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioPerezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioPerezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
