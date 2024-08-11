import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitRoutingModule } from './uikit-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GeocodeService } from 'src/app/shared/services/geocode.service';
import { WeatherService } from 'src/app/shared/services/weather.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, UikitRoutingModule],

  providers: [provideHttpClient(withInterceptorsFromDi()), GeocodeService, WeatherService],
})
export class UikitModule {}
