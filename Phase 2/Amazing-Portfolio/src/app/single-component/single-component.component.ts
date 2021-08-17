import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
  loginPage: boolean = true;
  registrationPage: boolean = false;
  portfolioPage: boolean = false;
  usernamePasswordError: boolean = false;
  usernameExistedError: boolean = false;
  registrationSuccess: boolean = false;
  contactsTable: boolean = false;
  username: string = "";

  loginForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ])
  });

  registrationForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ])
  });

  contactForm = new FormGroup({
    contactName: new FormControl("", [
      Validators.required,
      Validators.minLength(1)  
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(1) 
    ])
  });

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
  }

  // prevent old message showing when navigating between components
  initFlags() {
    this.usernamePasswordError = false;
    this.usernameExistedError = false;
    this.registrationSuccess = false;
    this.contactsTable = false;
  }

  // check if username and password are filled, then enable the login button
  // check the username and password are valid (against some storage)
  // if everything is correct, then disable login component and show portfolio component
  //  else, pop up the error and keep the login component showing
  login() {
    let loginFields = this.loginForm.value;
    let user = this.database.authUser(loginFields.username, loginFields.password);

    this.initFlags();

    if (user !== undefined) {
      this.username = loginFields.username;

      this.loginPage = false;
      this.portfolioPage = true;
    } else {
      this.usernamePasswordError = true;
    }

    this.loginForm.reset();
  }

  signUp() {
    this.loginPage = false;
    this.registrationPage = true;

    this.initFlags();
  }

  toLoginPage() {
    this.registrationPage = false;
    this.loginPage = true;

    this.initFlags();
  }

  register() {
    let registrationFields = this.registrationForm.value;
    let usernameExisted = this.database.searchUser(registrationFields.username);

    this.initFlags();

    if (usernameExisted) {
      this.usernameExistedError = true;
    } else {
      this.database.addUser(
        registrationFields.username, 
        registrationFields.password,
        registrationFields.firstname,
        registrationFields.lastname);
      this.registrationSuccess = true;
      this.registrationForm.reset();
    }
  }

  saveContact() {
    let contactFields = this.contactForm.value;
    let userData = this.database.searchUser(this.username);

    userData?.addContact(contactFields.contactName, contactFields.phoneNumber);
  }

  showTable() {
    // toggle the contacts table
    this.contactsTable = !this.contactsTable;
  }
}
