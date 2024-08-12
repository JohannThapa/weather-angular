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

  public weathers: IWeather[] = [];
  public weather = new Subject<IWeather[]>();
  private _weatherData = signal<IWeather[] | null>(null);
  constructor(private http: HttpClient) {
    this.loadData();
    effect(() => {
      this.setData();
    });
  }

  private loadData() {
    const weatherData = localStorage.getItem('weatherData');
    if (weatherData) {
      this.weathers = JSON.parse(weatherData);
      this._weatherData.set(this.weathers);
      this.weather.next(this.weathers);
    }
  }
  private setData() {
    localStorage.setItem('weatherData', JSON.stringify(this._weatherData()));
  }

  fetchWeather(lat: number, lon: number): void {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}&units=metric`;
    this.http.get<IWeather>(url).subscribe({
      next: (data) => {
        this.addWeatherToCode(data);
      },
      error: (err) => console.error('Failed to fetch weather data', err),
    });
  }
  retrieveWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${environment.openWeatherApiKey}&units=metric`;
    return this.http.get(url);
  }
  getWeather(): Observable<IWeather[]> {
    console.log('this.weather :', this.weather);
    return this.weather.asObservable();
  }

  setWeathers(data: IWeather[]) {
    this.weathers.push(...data);
    this._weatherData.set(this.weathers);
    this.weather.next(this.weathers);
    this.setData();
  }
  addWeatherToCode(item: IWeather) {
    this.weathers.push(item);
    this._weatherData.set(this.weathers);
    this.weather.next(this.weathers);
    this.setData();
    console.log('weather added', item);
  }
  removeFromCode(id?: number) {
    this.weathers = this.weathers.filter((item) => item.id !== id);
    this._weatherData.set(this.weathers);
    this.weather.next(this.weathers);
    this.setData();
  }

  emptryAll() {
    this.weathers.length = 0;
    this._weatherData.set(this.weathers);
    this.weather.next(this.weathers);
    localStorage.removeItem('weatherData');
  }

  get weatherData() {
    return this._weatherData();
  }

}
