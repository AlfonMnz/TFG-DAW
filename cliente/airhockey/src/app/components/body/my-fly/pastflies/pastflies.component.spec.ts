import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastfliesComponent } from './pastflies.component';

describe('PastfliesComponent', () => {
  let component: PastfliesComponent;
  let fixture: ComponentFixture<PastfliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastfliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastfliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
