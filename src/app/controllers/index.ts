import { RequestHandler } from "../../types/controllers";

export class BaseController {
  static root: RequestHandler = async (_req, res) => {
    return res.json({ message: "Hello world :D" });
  };
}
