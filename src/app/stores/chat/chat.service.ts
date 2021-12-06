import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import Chat from 'src/app/shared/models/chat';
import { ChatState } from './chat.store';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  @Select((state) => state.chats.chats) chats$: Observable<Chat[]>;

  constructor() {}

  public retrieveUserChats(userId: string): Observable<Chat[]> {
    return of([
      {
        id: '794ac623-c449-4e98-bee4-2fe3caadfbef',
        user: {
          avatarUrl: '../../../../assets/icon/default-user.svg',
          name: 'Matheus',
        },
        lastMessage: {
          content: 'Lorem ipsum dora sit amet',
          hasCurrentUserSent: true,
          sentDatetime: new Date(),
        },
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
        },
      },
    ]);
  }
}
