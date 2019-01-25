import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminavionesComponent } from './adminaviones.component';

describe('AdminavionesComponent', () => {
  let component: AdminavionesComponent;
  let fixture: ComponentFixture<AdminavionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminavionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminavionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
