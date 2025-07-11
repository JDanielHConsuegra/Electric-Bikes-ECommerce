import { Request, Response, Router } from "express";
import validateUserRegister from "../middlewares/userRegister.middleware";
import validateUserLogin from "../middlewares/userLogin.middleware";
import { login, registerUser } from "../controllers/user.controller";
import checkLogin from "../middlewares/checkLogin.middleware";
import { OrderRepository } from "../repositories/order.repository";

const usersRouter = Router();
//sirve
usersRouter.post("/register", validateUserRegister, registerUser);
//sirve
usersRouter.post("/login", validateUserLogin, login);
//pendiente por probar
usersRouter.get("/orders", checkLogin, async (req: Request, res: Response) => {
  const { userId } = req.body;
  const orders = await OrderRepository.find({
    relations: ["products"],
    where: { user: { id: userId }},
  });
  res.send(orders);
});

export default usersRouter;
