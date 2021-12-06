import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import Chat from 'src/app/shared/models/chat';
import { Message } from 'src/app/shared/models/message';
import { ChatService } from 'src/app/stores/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements DoCheck {
  public messages$: Observable<Message[]>;

  public message: Message;

  public chat: Chat;

  constructor(private chatService: ChatService) {
    this.chat = chatService.selectedChat;
    this.messages$ = this.chatService.retrieveChatMessages(this.chatService.selectedChat.id);
  }

  ngDoCheck(): void {
    this.messages$ = this.chatService.retrieveChatMessages(this.chatService.selectedChat.id);
  }

  onMessageChange(message: string) {
    this.message = {
      chatId: this.chat.id,
      sentDatetime: new Date(),
      hasCurrentUserSent: true,
      content: message
    };
  }
}
