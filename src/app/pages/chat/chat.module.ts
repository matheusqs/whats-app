import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatPageRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.page';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MessageComponent } from './message/message.component';
import { MessageTyperComponent } from './message-typer/message-typer.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    MaterialModule,
  ],
  declarations: [
    ChatPage,
    MessageComponent,
    MessageTyperComponent,
    MessageSenderComponent,
  ],
})
export class ChatPageModule {}
