import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';

@NgModule({
  imports: [WeatherRoutingModule, AngularSvgIconModule.forRoot()],
  providers: [provideHttpClient(withInterceptorsFromDi()), GeocodeService, WeatherService],
})
export class WeatherModule {}
