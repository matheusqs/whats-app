import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import Chat from 'src/app/shared/models/chat';
import { Message } from 'src/app/shared/models/message';
import { ChatState } from './chat.store';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chats$: Observable<Chat[]>;
  selectedChat: Chat;

  messages: Message[] = [
    {
      content: 'Oi tudo bom?',
      hasCurrentUserSent: false,
      sentDatetime: new Date(),
      chatId: '794ac623-c449-4e98-bee4-2fe3caadfbef'
    },
    {
      content: 'Oi, tudo tranquilo. E vc?',
      hasCurrentUserSent: true,
      sentDatetime: new Date(),
      chatId: '794ac623-c449-4e98-bee4-2fe3caadfbef'
    },
    {
      content: 'Oi meu anjo, tudo tranquilo no trabalho?',
      hasCurrentUserSent: true,
      sentDatetime: new Date(),
      chatId: 'c398918f-56ae-4ca2-9ba8-4e1219b31d08'
    },
    {
      content: 'Oii',
      hasCurrentUserSent: false,
      sentDatetime: new Date(),
      chatId: 'c398918f-56ae-4ca2-9ba8-4e1219b31d08'
    },
    {
      content: 'Bem mal viu, hoje em casa te conto melhor',
      hasCurrentUserSent: false,
      sentDatetime: new Date(),
      chatId: 'c398918f-56ae-4ca2-9ba8-4e1219b31d08'
    }
  ];

  constructor(private store: Store) {
    this.chats$ = this.store.select(state => state.chats.chats);
  }

  public retrieveUserChats(userId: string): Observable<Chat[]> {
    const messagesCopy: Message[] = this.clone(this.messages);

    return of([
      {
        id: '794ac623-c449-4e98-bee4-2fe3caadfbef',
        user: {
          avatarUrl: '../../../../assets/icon/default-user.svg',
          name: 'Matheus',
        },
        lastMessage: messagesCopy
            .sort((a, b) => a.sentDatetime > b.sentDatetime ? 1 : -1)
            .find((message) => message.chatId === '794ac623-c449-4e98-bee4-2fe3caadfbef'),
      },
      {
        id: 'c398918f-56ae-4ca2-9ba8-4e1219b31d08',
        user: {
          avatarUrl: '../../../../assets/icon/default-user.svg',
          name: 'Thais',
        },
        lastMessage: {
          content: 'Lorem ipsum dora sit amet',
          hasCurrentUserSent: false,
          sentDatetime: new Date(),
          chatId: 'c398918f-56ae-4ca2-9ba8-4e1219b31d08'
        },
      },
      {
        id: '739bf3da-70ff-4b81-80a8-26b251e6dc99',
        user: {
          avatarUrl: '../../../../assets/icon/default-user.svg',
          name: 'Gustavo',
        },
        lastMessage: {
          content: 'Lorem ipsum dora sit amet',
          hasCurrentUserSent: false,
          sentDatetime: new Date(),
          chatId: '739bf3da-70ff-4b81-80a8-26b251e6dc99'
        },
      },
    ]);
  }

  public retrieveChatMessages(chatId: string): Observable<Message[]> {
    const messagesFiltered = this.messages.filter((message) => message.chatId === chatId);
    return of(messagesFiltered);
  }

  public sendMessage(message: Message) {
    this.messages.push(message);
  }

  public clone(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = this.clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
              copy[attr] = this.clone(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
  }
}
