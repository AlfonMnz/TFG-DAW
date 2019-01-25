import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowfliesComponent } from './nowflies.component';

describe('NowfliesComponent', () => {
  let component: NowfliesComponent;
  let fixture: ComponentFixture<NowfliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowfliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowfliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
