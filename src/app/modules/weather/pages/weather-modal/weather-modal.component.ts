import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/core/models/weather.mode';
import { ChartHeaderComponent } from '../chart-header/chart-header.component';
import { WeatherInfoCardComponent } from 'src/app/shared/components/cards/weather-info-card/weather-info-card.component';
import { WeatherChartsComponent } from '../weather-charts/weather-charts.component';
import { WeatherPolarChartComponent } from '../weather-polar-chart/weather-polar-chart.component';

@Component({
  selector: 'app-weather-modal',
  standalone: true,
  imports: [CommonModule, ChartHeaderComponent, WeatherInfoCardComponent, WeatherChartsComponent, WeatherPolarChartComponent],
  templateUrl: './weather-modal.component.html',
  styleUrl: './weather-modal.component.scss'
})
export class WeatherModalComponent {

  @Input() isVisible: boolean = false;
  @Input() weatherData: IWeather | undefined;
  closeModal() {
    this.isVisible = false;
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
