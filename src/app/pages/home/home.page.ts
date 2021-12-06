import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { ChatService } from 'src/app/stores/chat/chat.service';
import Chat from 'src/app/shared/models/chat';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalHomeOptionsComponent } from './modal-home-options/modal-home-options.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewChecked {
  public chats$: Observable<Chat[]>;

  constructor(private chatService: ChatService, public modalController: ModalController) {}

  ngAfterViewChecked(): void {
    this.chats$ = this.chatService.retrieveUserChats('');
  }

  public async onOptionsClick() {
    const modal = await this.modalController.create({
      component: ModalHomeOptionsComponent,
    });

    return await modal.present();
  }
}
