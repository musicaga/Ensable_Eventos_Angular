import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
