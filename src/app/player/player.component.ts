import { Component } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  private healthRegenRate: number = 20;

  constructor(public stats: StatsService) {}

  regenHealth(): void {
    this.stats.addHealth(this.healthRegenRate);
  }
}
