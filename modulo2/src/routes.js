import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// import User from './app/models/User';
import Usercontroller from './app/controllers/UserController';
import Sessioncontroller from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', Usercontroller.store);
routes.post('/sessions', Sessioncontroller.store);

routes.use(authMiddleware);

routes.put('/users', Usercontroller.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Philipe Antunes',
//     email: 'philipe@teste.com.br',
//     password_hash: '123123123123',
//   });
//   return res.json(user);
// });

export default routes;
