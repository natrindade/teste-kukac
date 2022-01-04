import StatusCodes from 'http-status-codes';
import { response, Request, Response } from 'express';
import UserDao from '@daos/User/UserDao.mock';


const palindromoDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



export class PalindromosController {
    /**
 * Get all palindromos.
 * 
 * @param req 
 * @param res 
 * @returns 
 */


    /**
     * Add one palindromo.
     * 
     * @param req 
     * @param res 
     * @returns 
     */

    async inPut(req: Request, res: Response) {

        var request = req.body
        var response = [];

        for (let i = request.primeiro; i < request.ultimo; i++) {

            var text = i.toString();
            var invertText = text.split("").reverse().join("");
            if (text == invertText) {
                response.push(i);

            }

        }
        return res.status(OK).json(response);


    }
    /**
     * Update one palindromo.
     * 
     * @param req 
     * @param res 
     * @returns 
     */



    /**
     * Delete one palindromo.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
}