import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-images.component.html',
  styleUrls: ['./preview-images.component.scss'],
})
export class PreviewImagesComponent implements OnInit {
  selectedImage: string;
  @Input() name: string;
  @Input() images: string[];

  constructor() {}

  ngOnInit(): void {
    this.selectImage(
      this.images.length ? this.images[0] : '/assets/images/no-image.png'
    );
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }
}
