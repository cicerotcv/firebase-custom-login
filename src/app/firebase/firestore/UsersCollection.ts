import { FirestoreCollection } from './FirestoreCollection';

interface IUser {
  passwordHash: string;
}

export class UsersCollection extends FirestoreCollection {
  static collection = 'users';

  static async create(username: string, passwordHash: string) {
    const document = this.makeQuery(username);
    await document.create({ passwordHash });
  }

  static async getDocument(username: string) {
    return this._getDocument<IUser>(username);
  }
}
