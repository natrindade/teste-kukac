import { Router } from 'express';
import { CarroController } from 'src/controllers/CarrosController';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

// Carro-route
const carroRouter = Router();
const carroController = new CarroController();
carroRouter.get('/', carroController.getAll);
carroRouter.post('/', carroController.addOne);
carroRouter.put('/', carroController.updateOne);
carroRouter.delete('/:id', carroController.deleteOne);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/carros', carroRouter);
export default baseRouter;
