import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecccuentasComponent } from './homecccuentas.component';

describe('HomecccuentasComponent', () => {
  let component: HomecccuentasComponent;
  let fixture: ComponentFixture<HomecccuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecccuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecccuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
