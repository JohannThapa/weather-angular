import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  imports: [
    WeatherRoutingModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class WeatherModule { }
