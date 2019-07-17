import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoSliderComponent } from './eco-slider.component';

describe('EcoSliderComponent', () => {
  let component: EcoSliderComponent;
  let fixture: ComponentFixture<EcoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
