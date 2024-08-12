import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { ColorMenuComponent } from './color-menu/color-menu.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, ProfileMenuComponent, ColorMenuComponent, NavbarMobileComponent, ToggleMenuComponent],

  providers: [SvgIconRegistryService],
})
export class NavbarComponent{
  constructor(private menuService: MenuService) {}


  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
