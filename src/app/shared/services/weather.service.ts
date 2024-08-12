import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { IWeather } from 'src/app/core/models/weather.mode';
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
