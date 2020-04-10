import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.digalogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  talk()
  {
    this.client.textRequest('que es el coronavirus')
                .then(res => console.log(res));
  }
}
