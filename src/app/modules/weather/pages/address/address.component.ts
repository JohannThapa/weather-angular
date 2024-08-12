import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CodeComponent } from 'src/app/shared/components/code/code.component';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { WeatherChartsComponent } from '../weather-charts/weather-charts.component';
import { WeatherPolarChartComponent } from '../weather-polar-chart/weather-polar-chart.component';


@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    ButtonComponent,
    CodeComponent,
    WeatherChartsComponent,
    WeatherPolarChartComponent
  ],
  providers: [GeocodeService, WeatherService],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  weatherData: any = {
    "coord": {
        "lon": -74.006,
        "lat": 40.7127
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 27.86,
        "feels_like": 27.82,
        "temp_min": 26.11,
        "temp_max": 29.05,
        "pressure": 1013,
        "humidity": 44,
        "sea_level": 1013,
        "grnd_level": 1012
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.17,
        "deg": 270,
        "gust": 7.72
    },
    "clouds": {
        "all": 0
    },
    "dt": 1723406760,
    "sys": {
        "type": 1,
        "id": 4610,
        "country": "US",
        "sunrise": 1723370576,
        "sunset": 1723420771
    },
    "timezone": -14400,
    "id": 5128581,
    "name": "New York",
    "cod": 200
  }
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
            },
          });
        },
        error: () => (this.error = 'Failed to fetch coordinates'),
      });
    }
  }

  downloadJSON() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.weatherData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'weatherData.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
