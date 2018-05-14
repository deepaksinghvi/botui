import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotComponent } from './bot/bot.component';
import {RfidComponent} from './rfid/rfid.component';

const routes: Routes = [
  { path: 'bots', component: BotComponent },
  { path: 'rfids', component: RfidComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }