import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input()
  message: Message;

  constructor() {}

  ngOnInit() {}
}
