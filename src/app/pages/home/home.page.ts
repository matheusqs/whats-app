import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public chats: any[] = [
    'teste',
    'teste',
    'teste',
    'teste',
    'teste'
  ];

  constructor() { }

  ngOnInit() {}

}
