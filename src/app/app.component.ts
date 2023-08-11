import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
