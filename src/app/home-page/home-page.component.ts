import { Component, OnInit } from '@angular/core';

import { RedirectionService } from '../dataservices/redirection.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public redirectionSer:RedirectionService) { }

  ngOnInit() {
  }

}
