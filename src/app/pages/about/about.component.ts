import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imagePath   = 'assets/images/logo.png';
  title       = 'Projeto criado no curso';
  courseName  = 'Apps Web e mobile num só projeto com angular e nativescript';
  description = 'Desenvolva Aplicativos Web e Mobile (Android e IOS) compatilhado';
  buttonText  = 'Saiba mais';

  ngOnInit() {
  }

}
