import { Component } from '@angular/core';
import { IdxHeaderComponent } from '../../components/index/idx-header/idx-header.component';
import { IdxWeatherTableComponent } from '../../components/index/idx-weather-table/idx-weather-table.component';
import { IdxTableItemComponent } from '../../components/index/idx-table-item/idx-table-item.component';
import { IdxCard1Component } from '../../components/index/idx-card-1/idx-card-1.component';
import { Idx } from '../../models/index.model.';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [IdxHeaderComponent, IdxWeatherTableComponent, IdxTableItemComponent, IdxCard1Component],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  idx: Array<Idx>;
  constructor() {
    this.idx = [
      {
        id: 1,
        title: 'Test 1',
        coordinates: '879',
        location: '899',
        image: './assets/icons/interview.svg',
        avatar: 'a'
      },
      {
        id: 2,
        title: 'Test 2',
        coordinates: '879',
        location: '899',
        image: './assets/icons/map.svg',
        avatar: 'a'
      },
      {
        id: 3,
        title: 'Test 3',
        coordinates: '879',
        location: '899',
        image: './assets/icons/website.svg',
        avatar: 'a'
      },
      {
        id: 4,
        title: 'Test 4',
        coordinates: '879',
        location: '899',
        image: './assets/icons/complete.svg',
        avatar: 'a'
      }
    ];
  }
}
