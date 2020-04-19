import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloanComponent } from './bloan.component';

describe('BloanComponent', () => {
  let component: BloanComponent;
  let fixture: ComponentFixture<BloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
