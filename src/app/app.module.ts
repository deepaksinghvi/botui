import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from "@angular/common/http";
import { BotComponent } from './bot/bot.component';
import {BotService} from './bot/bot.service'
import { RfidComponent } from './rfid/rfid.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    RfidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
