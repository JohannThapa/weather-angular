import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, ButtonComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  addressForm: FormGroup;
  weatherData: any;
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private geocodingService: GeocodeService,
    private weatherService: WeatherService,
  ) {
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.addressForm.valid) {
      const address = this.addressForm.get('address')?.value;
      this.geocodingService.getCoordinates(address).subscribe({
        next: (data) => {
          const coords = data.results[0].geometry;
          this.weatherService.getWeather(coords.lat, coords.lng).subscribe({
            next: (weatherData) => (this.weatherData = weatherData),
            error: () => (this.error = 'Failed to fetch weather data'),
          });
        },
        error: () => (this.error = 'Failed to fetch coordinates'),
      });
    }
  }
}
