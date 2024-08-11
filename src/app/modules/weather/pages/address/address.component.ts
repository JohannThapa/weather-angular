import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CodeComponent } from 'src/app/shared/components/code/code.component';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, ButtonComponent, CodeComponent],
  providers: [
    GeocodeService,
    WeatherService,
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit{
  addressForm: FormGroup;
  weatherData: any;
  latitude: string | undefined;
  longitude: string | undefined;
  error: string = '';
  private isAdded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private geocodingService: GeocodeService,
    private weatherService: WeatherService,
  ) {
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.isAdded = this.weatherData;
  }
  onSubmit() {
    if (this.addressForm.valid) {
      const address = this.addressForm.get('address')?.value;
      this.geocodingService.getCoordinates(address).subscribe({
        next: (data) => {
          const coords = data.results[0].geometry;
          this.latitude = coords.lat;
          this.longitude = coords.lng;
          this.weatherService.fetchWeather(coords.lat, coords.lng);
          this.weatherService.retrieveWeather(coords.lat, coords.lng).subscribe({
            next: (weather) => {
              console.log('Fetched weather:', weather);
              this.weatherData = weather;
              this.weatherService.addWeatherToCode(weather);
            },
            error: (error) => {
              console.error('Error fetching weather:', error);
            }
          });
        },
        error: () => (this.error = 'Failed to fetch coordinates'),
      });
    }
  }
}
