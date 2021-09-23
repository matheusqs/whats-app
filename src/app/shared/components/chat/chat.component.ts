import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public time: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit() {}

  openChat(){
    this.router.navigate(['/chat']);
  }
}
