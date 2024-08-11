import { Component } from '@angular/core';
import { AddressComponent } from 'src/app/modules/weather/pages/address/address.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [AddressComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
