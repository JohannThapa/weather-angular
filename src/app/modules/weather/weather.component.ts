import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IWeather } from 'src/app/core/models/weather.mode';
import { CodeComponent } from 'src/app/shared/components/code/code.component';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CodeComponent, AngularSvgIconModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  weatherData: IWeather[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
      console.log('weatherData', this.weatherData);

    });
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('weatherData', this.weatherData);
      },
      error: () => {
        console.log('Failed to receive weather data');
      },
    });
  }
}
