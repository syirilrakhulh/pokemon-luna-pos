import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '~modules/pokemon/interface';
import { CapitalizePipe } from '~modules/shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent {
  @Input() type: Pokemon['types'][number];
  @Input() height: Pokemon['height'];
  @Input() weight: Pokemon['weight'];

  constructor() {}
}
