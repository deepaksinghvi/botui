import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Bot } from '../models/bot.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BotService {

  constructor(private http:HttpClient) {}

  //private botUrl = 'http://localhost:8080/warehousebot';
  private botUrl = 'http://warehousebot.us-east-2.elasticbeanstalk.com/warehousebot';
	//private botUrl = '/api';

  public getBots() {
    return this.http.get<Bot[]>(this.botUrl+"/bot/getbots");
  }

  public deleteBot(bot) {
    return this.http.delete(this.botUrl + "/bot/"+ bot.botId);
  }

public updateBot(bot) {
    return this.http.put(this.botUrl+"/bot",bot);
  }

  public createBot(bot) {
    return this.http.post<Bot>(this.botUrl+"/bot", bot);
  }

}