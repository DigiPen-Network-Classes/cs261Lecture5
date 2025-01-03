class User {
  // must declare private variables in context:
  #username;

  constructor(username, password, avatar) {
    this.#username = username;
    this.password = password;
    this.avatar = avatar;
  }

  // readonly property with private instance var:
  get username() { return this.#username; }
  // no setter, can't change username

  logAvatar() {
    console.log(`${this.username} avatar is ${this.avatar}`);
  }
}  

let u = new User("tony", "password1", "initial");
// not allowed!
u.username = "newusername";


