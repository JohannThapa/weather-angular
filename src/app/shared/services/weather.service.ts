import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  retrieveWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${environment.openWeatherApiKey}&units=metric`;
    return this.http.get(url);
  }
}
