import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public messages: Message[] = [
    {
      content: 'Oii tudo bom?',
      hasCurrentUserSent: false,
      sentDatetime: new Date(),
    },
    {
      content: 'Falaaa bom dms e vc?',
      hasCurrentUserSent: true,
      sentDatetime: new Date(),
    },
    {
      content:
        'Bom tbm, cara preciso de um help seu com o trabalho lá de mobile',
      hasCurrentUserSent: false,
      sentDatetime: new Date(),
    },
    {
      content: 'Putz, bora olhar esse trem',
      hasCurrentUserSent: true,
      sentDatetime: new Date(),
    },
    {
      content: 'Chama discord',
      hasCurrentUserSent: true,
      sentDatetime: new Date(),
    },
  ];

  constructor() {}

  ngOnInit() {}
}
