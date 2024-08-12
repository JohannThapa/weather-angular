import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPolarChartComponent } from './weather-polar-chart.component';

describe('WeatherPolarChartComponent', () => {
  let component: WeatherPolarChartComponent;
  let fixture: ComponentFixture<WeatherPolarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherPolarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
