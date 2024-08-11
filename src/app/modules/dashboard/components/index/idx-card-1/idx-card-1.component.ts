import { Component, Input } from '@angular/core';
import { Idx } from '../../../models/index.model.';
import { NgStyle, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[idx-card-1]',
  standalone: true,
  imports: [NgStyle, AngularSvgIconModule, NgClass],
  templateUrl: './idx-card-1.component.html',
  styleUrl: './idx-card-1.component.scss'
})
export class IdxCard1Component {
  @Input() card: Idx  = <Idx>{};

  constructor() {}

  ngOnInit(): void {}
}
