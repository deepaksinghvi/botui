import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bot } from '../models/bot.model';
import { BotService } from './bot.service';
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

   bots: Bot[];

  constructor(private router: Router, private botService: BotService) {

  }

  ngOnInit() {
    this.botService.getBots()
      .subscribe( data => {
        this.bots = data;
      });
  };
  updateBot(bot) {
        this.botService.updateBot(bot);
    }
}
