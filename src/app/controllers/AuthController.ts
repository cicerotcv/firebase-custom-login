import { RequestHandler } from '../../types/controllers';
import { Crypto } from '../crypto';
import { Auth } from '../firebase/auth';
import { UsersCollection } from '../firebase/firestore/UsersCollection';

export class AuthController {
  static index: RequestHandler = (_req, res) => {
    return res.json({ msg: 'Hello from authRoutes' });
  };

  static createAccount: RequestHandler = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: 'You must provide username and password' });

    const userExists = await UsersCollection.documentExists(username);

    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    const passwordHash = Crypto.hash(password);

    await UsersCollection.create(username, passwordHash);
    const customToken = await Auth.createToken(username);

    return res.json({ username, customToken });
  };

  static authenticate: RequestHandler = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: 'You must provide username and password' });

    const user = await UsersCollection.getDocument(username);

    if (!user) return res.status(400).json({ message: "User doesn't exist" });

    const passwordMatches = Crypto.compare(password, user.passwordHash);

    if (!passwordMatches)
      return res.status(400).json({ message: "Password doesn't match" });

    const customToken = await Auth.createToken(username);

    return res.json({ customToken });
  };
}
