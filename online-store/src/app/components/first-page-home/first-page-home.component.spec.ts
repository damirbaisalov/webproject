import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageHomeComponent } from './first-page-home.component';

describe('FirstPageHomeComponent', () => {
  let component: FirstPageHomeComponent;
  let fixture: ComponentFixture<FirstPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
