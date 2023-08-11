import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.scss'],
})
export class ErrorNotFoundComponent {}
