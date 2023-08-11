import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { Pokemon, PokemonStats } from '~modules/pokemon/interface';

@Component({
  selector: 'app-result-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-comparison.component.html',
  styleUrls: ['./result-comparison.component.scss'],
})
export class ResultComparisonComponent implements OnInit, OnChanges {
  chart: Chart<'radar', (number | null)[], string>;
  @Input() selectedPokemon1: Pokemon | undefined;
  @Input() selectedPokemon2: Pokemon | undefined;
  constructor() {}

  ngOnInit(): void {
    this.bindChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['selectedPokemon1'] &&
        changes['selectedPokemon1'].currentValue) ||
      (changes['selectedPokemon2'] && changes['selectedPokemon2'].currentValue)
    ) {
      this.updateChart();
    }
  }

  bindChart(): void {
    this.chart = new Chart('comparison-chart', {
      type: 'radar',
      data: {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Att', 'Sp. Def', 'Speed'],
        datasets: [],
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

  updateChart(): void {
    if (this.selectedPokemon1 && this.selectedPokemon2) {
      const datasets = [];

      const pokemon1 = Object.fromEntries(
        this.selectedPokemon1.stats.map((stat) => [
          stat.stat.name,
          stat.base_stat,
        ])
      ) as unknown as PokemonStats;

      const pokemon2 = Object.fromEntries(
        this.selectedPokemon2.stats.map((stat) => [
          stat.stat.name,
          stat.base_stat,
        ])
      ) as unknown as PokemonStats;

      datasets.push(
        {
          label: `Stats ${this.selectedPokemon1.name}`,
          data: [
            pokemon1.hp,
            pokemon1.attack,
            pokemon1.defense,
            pokemon1['special-attack'],
            pokemon1['special-defense'],
            pokemon1.speed,
          ],
        },
        {
          label: `Stats ${this.selectedPokemon2.name}`,
          data: [
            pokemon2.hp,
            pokemon2.attack,
            pokemon2.defense,
            pokemon2['special-attack'],
            pokemon2['special-defense'],
            pokemon2.speed,
          ],
        }
      );

      this.chart.data.datasets = datasets;

      this.chart.update();
    }
  }
}
