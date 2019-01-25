import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvueloComponent } from './addvuelo.component';

describe('AddvueloComponent', () => {
  let component: AddvueloComponent;
  let fixture: ComponentFixture<AddvueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
