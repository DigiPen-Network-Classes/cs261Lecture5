"use strict";
// user class with avatarUrl as an extra, unneeded, property
export class User {
  
  constructor(name, password, avatar) {
    this.username = name;
    this.password = password;
    this.avatar = avatar;
  }

  // getter and setter (don't do this!)
  get avatarUrl() { return this.avatar; }
  set avatarUrl(a) { this.avatar = a; }

  // an instance function
  logAvatar() {
    console.log(`${this.username} avatar is ${this.avatar}`);
  }
}  

let u = new User("tony", "password1", "initial");
u.logAvatar();
u.avatarUrl = "different";
u.logAvatar();
