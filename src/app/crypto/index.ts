import bcrypt from "bcrypt";

export class Crypto {
  static hash(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    return passwordHash;
  }
  static compare(password: string, passwordHash: string) {
    return bcrypt.compareSync(password, passwordHash);
  }
}
