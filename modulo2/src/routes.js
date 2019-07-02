import { Router } from 'express';
// import User from './app/models/User';
import Usercontroller from './app/controllers/UserController';
import Sessioncontroller from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions', Sessioncontroller.store);

routes.use(authMiddleware);

routes.put('/users', Usercontroller.update);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Philipe Antunes',
//     email: 'philipe@teste.com.br',
//     password_hash: '123123123123',
//   });
//   return res.json(user);
// });

export default routes;
