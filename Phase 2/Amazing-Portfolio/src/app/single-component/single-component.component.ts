import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../classes/contact';
import { User } from '../classes/user';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
  loginSuccess: boolean = false;
  newUser: boolean = false;
  error: boolean = false;
  errorMsg: string = "";
  username: string = "";
  userContacts: Contact[] = [];

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
  }

  // check if username and password are filled
  // check the username and password are valid (against some storage)
  // if everything is correct, then disable login component and show portfolio component
  //  else, pop up the error and keep the login component showing
  login() {
    let loginFields = this.loginForm.value;
    let user: User | undefined = undefined; 

    this.error = false;
    this.errorMsg = "";
    this.loginForm.reset();
    
    if (this.loginForm.get('username')?.invalid) {
      this.error = true;
      this.errorMsg += "Please type in username! ";
    } 
    if (this.loginForm.get('password')?.invalid) {
      this.error = true;
      this.errorMsg += "Please type in password! ";
    } 
    if (!this.error) {
      user = this.database.searchUser(loginFields.username, loginFields.password);
    }

    if (user !== undefined && !this.error) {
      this.userContacts = user.getContacts();
      this.username = user.getUsername();
      this.loginSuccess = true;
    } else if (user === undefined && !this.error) {
      this.error = true;
      this.errorMsg = "username and/or password is incorrect!"
    }
  }

}
