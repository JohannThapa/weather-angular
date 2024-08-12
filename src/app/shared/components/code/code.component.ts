import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {
  @Input() codes: any;
  @Input() language: string = '';
  get formattedCode(): string {
    return JSON.stringify(this.codes, null, 2);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.formattedCode).then(() => {
      alert('Code copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
}
