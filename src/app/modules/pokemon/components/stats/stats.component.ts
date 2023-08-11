import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonStats } from '~modules/pokemon/interface';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() name: Pokemon['name'];
  @Input() stats: Pokemon['stats'];

  constructor() {}

  ngOnInit(): void {
    this.previewChart();
  }

  previewChart(): void {
    const data = Object.fromEntries(
      this.stats.map((stat) => [stat.stat.name, stat.base_stat])
    ) as unknown as PokemonStats;

    const chart = new Chart('chart', {
      type: 'radar',
      data: {
        labels: [
          'HP',
          'Attack',
          'Defense',
          'Special Attack',
          'Special Defense',
          'Speed',
        ],
        datasets: [
          {
            label: `Stats ${this.name}`,
            data: [
              data.hp,
              data.attack,
              data.defense,
              data['special-attack'],
              data['special-defense'],
              data.speed,
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              font: {
                size: 16,
                weight: '600',
              },
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: 'white',
            },
            angleLines: {
              color: 'white',
            },
            pointLabels: {
              color: 'white',
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }
}
