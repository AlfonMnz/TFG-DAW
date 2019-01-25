import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCCuentasComponent } from './c-c-cuentas.component';

describe('CCCuentasComponent', () => {
  let component: CCCuentasComponent;
  let fixture: ComponentFixture<CCCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
