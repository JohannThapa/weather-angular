import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [LayoutRoutingModule, BrowserAnimationsModule, AngularSvgIconModule.forRoot()],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class LayoutModule {}
