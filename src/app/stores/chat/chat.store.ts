import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import Chat from 'src/app/shared/models/chat';
import { RetriveChats } from './chat.actions';
import { ChatService } from './chat.service';
import { tap } from 'rxjs/operators';

interface ChatStateModel {
  chats: Chat[];
}

const INITIAL_STATE: ChatStateModel = {
  chats: [],
};

@State<ChatStateModel>({
  name: 'chats',
  defaults: INITIAL_STATE,
})
@Injectable({
  providedIn: 'root',
})
export class ChatState {
  constructor(private chatService: ChatService) {}

  @Selector()
  public static chats(state: ChatStateModel) {
    return state.chats;
  }

  @Action(RetriveChats)
  public feedAnimals(
    stateContext: StateContext<ChatStateModel>,
    { userId }: RetriveChats
  ) {
    return this.chatService.retrieveUserChats(userId).pipe(
      tap((chats) => {
        console.log('Entrou -> ' + chats);
        stateContext.patchState({
          chats,
        });
      })
    );
  }
}
