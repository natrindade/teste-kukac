import { Router } from 'express';
import { CarroController } from 'src/controllers/CarrosController';
import { MotoController } from 'src/controllers/MotoController';
import { PalindromosController } from 'src/controllers/PalindromosController';
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

// Moto -route
const motoRouter = Router();
const motoController = new MotoController();
motoRouter.get('/', motoController.getAll);
motoRouter.post('/', motoController.addOne);
motoRouter.put('/', motoController.updateOne);
motoRouter.delete('/:id', motoController.deleteOne);

// Palindromo-route
const palindromoRouter = Router();
const palindromoController = new PalindromosController();
palindromoRouter.post('/', palindromoController.inPut);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/carros', carroRouter);
baseRouter.use('/motos', motoRouter);
baseRouter.use('/palindromos', palindromoRouter);

export default baseRouter;
