import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-typer',
  templateUrl: './message-typer.component.html',
  styleUrls: ['./message-typer.component.scss'],
})
export class MessageTyperComponent implements OnInit {
  @Output() messageEmitter = new EventEmitter<string>();

  messageForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.messageForm = fb.group({
      message: ''
    });
  }

  ngOnInit() {
    this.messageForm.get('message').valueChanges.subscribe((message) => this.onChangeMessage(message));
  }

  onChangeMessage(message: string): void {
    this.messageEmitter.emit(message);
  }

}
