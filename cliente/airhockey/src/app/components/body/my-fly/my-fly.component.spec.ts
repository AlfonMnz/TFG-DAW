import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlyComponent } from './my-fly.component';

describe('MyFlyComponent', () => {
  let component: MyFlyComponent;
  let fixture: ComponentFixture<MyFlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
