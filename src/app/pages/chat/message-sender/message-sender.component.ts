import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message';
import { ChatService } from 'src/app/stores/chat/chat.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss'],
})
export class MessageSenderComponent implements OnInit {
  @Input() message: Message;

  constructor(public chatService: ChatService) { }

  ngOnInit() {}

  onSendClick() {
    this.chatService.sendMessage(this.message);
  }

}
