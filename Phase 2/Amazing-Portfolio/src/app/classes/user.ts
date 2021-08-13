import { Contact } from "./contact";

export class User {
    private contacts: Contact[] = [];

    constructor(private username: string, private password: string){}
  
    addContact(name: string, number: string) {
      this.contacts.push(
        new Contact(name, number)
      );
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }
}
