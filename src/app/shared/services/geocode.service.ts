import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeocodeService {
  private apiUrl: string = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(address)}&key=${environment.openCageApiKey}`;
    return this.http.get(url);
  }
}
