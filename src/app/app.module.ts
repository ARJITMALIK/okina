import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthbarComponent } from './healthbar/healthbar.component';
import { PlayerComponent } from './player/player.component';
import { NpcComponent } from './npc/npc.component';
import { BossesComponent } from './bosses/bosses.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthbarComponent,
    PlayerComponent,
    NpcComponent,
    BossesComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
