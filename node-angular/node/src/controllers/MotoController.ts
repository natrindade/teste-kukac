import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { paramMissingError } from '@shared/constants';
import MotoDao from '@daos/Moto/MotoDao';

const motoDao = new MotoDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export class MotoController {

    /**
     * Get all motos.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async getAll(req: Request, res: Response) {
        const motos = await motoDao.getAll();
        return res.status(OK).json({ motos });
    }


    /**
     * Add one moto.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async addOne(req: Request, res: Response) {
        const { moto } = req.body;
        if (!moto) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await motoDao.add(moto);
        return res.status(CREATED).end();
    }
    

    /**
     * Update one moto.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async updateOne(req: Request, res: Response) {
        const { moto } = req.body;
        if (!moto) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        moto.id = Number(moto.id);
        await motoDao.update(moto);
        return res.status(OK).end();
    }


    /**
     * Delete one moto.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async deleteOne(req: Request, res: Response) {
        const { id } = req.params;
        await motoDao.delete(Number(id));
        return res.status(OK).end();
    }

}