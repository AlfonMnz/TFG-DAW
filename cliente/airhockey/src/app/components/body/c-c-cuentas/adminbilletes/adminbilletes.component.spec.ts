import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbilletesComponent } from './adminbilletes.component';

describe('AdminbilletesComponent', () => {
  let component: AdminbilletesComponent;
  let fixture: ComponentFixture<AdminbilletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbilletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
