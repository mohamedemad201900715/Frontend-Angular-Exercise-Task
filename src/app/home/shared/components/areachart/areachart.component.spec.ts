import { ComponentFixture, TestBed } from '@angular/core/testing';

import { areachartComponent } from './areachart.component';

describe('areachartComponent', () => {
  let component: areachartComponent;
  let fixture: ComponentFixture<areachartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [areachartComponent]
    });
    fixture = TestBed.createComponent(areachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
