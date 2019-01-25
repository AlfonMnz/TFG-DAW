import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaerolineasComponent } from './adminaerolineas.component';

describe('AdminaerolineasComponent', () => {
  let component: AdminaerolineasComponent;
  let fixture: ComponentFixture<AdminaerolineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaerolineasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaerolineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
