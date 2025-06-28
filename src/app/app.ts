import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // CommonModule ให้ pipe 'number', RouterModule ให้ router-outlet
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [DecimalPipe],
})
export class App {
  rawNumber: number = 1234.5678;
  location: any;
  stats: any;

  constructor(private decimalPipe: DecimalPipe) {}

  get formattedNumber(): string | null {
    return this.decimalPipe.transform(this.rawNumber, '1.2-2');
  }
}
