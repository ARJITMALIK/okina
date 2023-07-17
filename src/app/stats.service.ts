import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  public health: number = 50;
  public maxHealth: number = 100;

  constructor() {}

  addHealth(health: number): void {
    if (this.health === this.maxHealth) {
      console.log('Already at max health');
      return;
    }

    if (this.health + health >= this.maxHealth) {
      this.health = this.maxHealth;
      return;
    }
    this.health += health;
  }
}
