import { Component, OnInit } from '@angular/core';
import { Idx } from '../../../models/index.model.';
import { NgFor } from '@angular/common';
import { IdxTableItemComponent } from '../idx-table-item/idx-table-item.component';

@Component({
  selector: '[idx-weather-table]',
  standalone: true,
  imports: [NgFor, IdxTableItemComponent],
  templateUrl: './idx-weather-table.component.html',
})
export class IdxWeatherTableComponent implements OnInit {
  public currentTable: Idx[] = [];

  constructor() {
    this.currentTable = [
      {
        id: 1,
        title: 'Test 1',
        location: 'test',
        coordinates: 'tets',
        image:
          'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
        avatar: './assets/avatars/rupak.png',
      },
      {
        id: 2,
        title: 'Test 2',
        location: 'test',
        image:
          'https://lh3.googleusercontent.com/k95IQpeYutx-lYXwgTZw0kXZl9GAkIOc4Yz3Dr06rndWphZ25kSWyF64aTqT3W4cOxz0eB5LfAss5i9WAR-ZPWVaifijsABLqzEYwHY=h500',
        avatar: './assets/avatars/rupak.png',
        coordinates: 'tets',
      },
      {
        id: 3,
        title: 'Test 3',
        location: 'test',
        image:
          'https://lh3.googleusercontent.com/iYNxP1eXG3C6ujTY4REQ9rBea19Z46oKtKkaDS1XA-ED5iFhFmPrvQPzwx8ZwACydCS2wbZ7K1P89XIED3s8JRcT6Pn0M1-sMifeyQ=h500',
        avatar: './assets/avatars/rupak.png',
        coordinates: 'tets',
      },
      {
        id: 4,
        title: 'Test 4',
        location: 'test',
        image:
          'https://lh3.googleusercontent.com/ujFwzDIXN64mJAHZwZ0OgNupowe5jlJPmV8OIrgSDjUAeb3SZRuhsuyPKAw6S2TkUknZvErVVKbzD-rEcs-augb6_LzUE5NVtPxj_w=h500',
        avatar: './assets/avatars/rupak.png',
        coordinates: 'tets',
      },
    ];
  }

  ngOnInit(): void {}
}
