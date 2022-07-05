import firebase from "..";

export class Auth {
  static async createToken(username: string) {
    return firebase.auth().createCustomToken(username);
  }
}
