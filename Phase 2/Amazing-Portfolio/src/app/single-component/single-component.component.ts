import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
  username: string = "";
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
