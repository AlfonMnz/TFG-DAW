import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincuentaComponent } from './admincuenta.component';

describe('AdmincuentaComponent', () => {
  let component: AdmincuentaComponent;
  let fixture: ComponentFixture<AdmincuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
