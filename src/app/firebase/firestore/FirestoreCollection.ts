import firebase from '..';

export class FirestoreCollection {
  static collection: string;

  protected static makeQuery(docName: string) {
    return firebase.firestore().collection(this.collection).doc(docName);
  }

  static async documentExists(docName: string) {
    const query = this.makeQuery(docName);
    const document = await query.get();
    return document.exists;
  }

  protected static async _getDocument<T>(docName: string): Promise<T> {
    const query = this.makeQuery(docName);
    const document = await query.get();
    if (!document.exists) return null;
    return document.data() as Promise<T>;
  }
}
