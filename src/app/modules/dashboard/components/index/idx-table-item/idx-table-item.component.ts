import { Component, Input } from '@angular/core';
import { Idx } from '../../../models/index.model.';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[idx-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './idx-table-item.component.html',
  styleUrl: './idx-table-item.component.scss'
})
export class IdxTableItemComponent {
  @Input() tableData = <Idx | any>{};

  constructor() {}

  ngOnInit(): void {}
}
