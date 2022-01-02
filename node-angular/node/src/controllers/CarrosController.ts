import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { paramMissingError } from '@shared/constants';
import CarroDao from '@daos/Carro/CarroDao';

const carroDao = new CarroDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export class CarroController {

    /**
     * Get all carros.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async getAll(req: Request, res: Response) {
        const carros = await carroDao.getAll();
        return res.status(OK).json({ carros });
    }


    /**
     * Add one carro.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async addOne(req: Request, res: Response) {
        const { carro } = req.body;
        if (!carro) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await carroDao.add(carro);
        return res.status(CREATED).end();
    }


    /**
     * Update one carro.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async updateOne(req: Request, res: Response) {
        const { carro } = req.body;
        if (!carro) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        carro.id = Number(carro.id);
        await carroDao.update(carro);
        return res.status(OK).end();
    }


    /**
     * Delete one carro.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async deleteOne(req: Request, res: Response) {
        const { id } = req.params;
        await carroDao.delete(Number(id));
        return res.status(OK).end();
    }

}