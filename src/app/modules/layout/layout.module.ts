import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [LayoutRoutingModule, CommonModule, AngularSvgIconModule.forRoot()],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class LayoutModule {}
