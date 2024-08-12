import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { AddressComponent } from './address.component';
import { of } from 'rxjs';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let geocodeServiceSpy: jasmine.SpyObj<GeocodeService>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const geocodeSpy = jasmine.createSpyObj('GeocodeService', ['getCoordinates']);
    const weatherSpy = jasmine.createSpyObj('WeatherService', ['retrieveWeather']);

    await TestBed.configureTestingModule({
      imports: [AddressComponent, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: GeocodeService, useValue: geocodeSpy },
        { provide: WeatherService, useValue: weatherSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    geocodeServiceSpy = TestBed.inject(GeocodeService) as jasmine.SpyObj<GeocodeService>;
    weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if form is invalid', () => {
    spyOn(component, 'onSubmit');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    fixture.detectChanges();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });

  it('should fetch coordinates and weather data on valid form submit', () => {
    geocodeServiceSpy.getCoordinates.and.returnValue(of({ results: [{ geometry: { lat: '40.7127', lng: '-74.006' } }] }));
    weatherServiceSpy.retrieveWeather.and.returnValue(of({ main: { temp: 23.39 } }));

    component.addressForm.setValue({ address: 'New york' });
    component.onSubmit();

    expect(component.isSubmitting).toBe(false);
    expect(component.weatherData?.main?.temp).toBe(23.39);
  });
});
