import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
// import { Observable } from "rxjs/Observable";
import 'rxjs/operators';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue:string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    // this.chat.talk();
    this.messages = this.chat.conversation.asObservable()
                     .pipe(
                            scan((acc, val) => acc.concat(val)))
                            console.warn(this.messages);
  }

  sendMessage()
  {
    this.chat.converse(this.formValue);
    this.formValue = '';
    console.log(this.messages);

  }

  printMessages()
  {
    console.log(this.messages);
  }
}
