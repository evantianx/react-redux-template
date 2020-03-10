export interface IUser {
  firstname: string;
  lastname: string;
}

class User { 
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname
    this.lastname = lastname
  }
  firstname: string;
  lastname: string;
}

export const users = [
  new User('Tom', 'Hanks'),
  new User('Tom', 'Cruise'),
  new User('Sean', 'Connery')
];
