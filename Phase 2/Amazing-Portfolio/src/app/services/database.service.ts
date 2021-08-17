import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private users: User[] = [];

  constructor() { }

  addUser(
    username: string, 
    password: string,
    firstname: string,
    lastname: string) {
    this.users.push(
      new User(username, password, firstname, lastname)
    );
  }

  authUser(username: string, password:string): User | undefined {
    return this.users.find(user => 
      username === user.getUsername() && password === user.getPassword());
  }

  searchUser(username: string): User | undefined {
    return this.users.find(user => 
      username === user.getUsername());
  }
}
