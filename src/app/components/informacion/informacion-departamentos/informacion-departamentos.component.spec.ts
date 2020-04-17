import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDepartamentosComponent } from './informacion-departamentos.component';

describe('InformacionDepartamentosComponent', () => {
  let component: InformacionDepartamentosComponent;
  let fixture: ComponentFixture<InformacionDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
