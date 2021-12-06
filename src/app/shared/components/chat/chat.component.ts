import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/stores/chat/chat.service';
import Chat from '../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input()
  public chat: Chat;

  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit() {}

  openChat() {
    this.chatService.selectedChat = this.chat;
    this.router.navigate(['/chat']);
  }
}
