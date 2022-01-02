import { ICarro } from '@entities/ICarro';
import { getRandomInt } from '@shared/functions';
import MockDaoMock from '../MockDb/MockDao.mock';
import { ICarroDao } from './ICarroDao';



class CarroDao extends MockDaoMock implements ICarroDao {


    public async getOne(id: number): Promise<ICarro | null> {
        const db = await super.openDb();
        for (const carro of db.carros) {
            if (carro.id === id) {
                return carro;
            }
        }
        return null;
    }


    public async getAll(): Promise<ICarro[]> {
        const db = await super.openDb();
        return db.carros;
    }


    public async add(carro: ICarro): Promise<void> {
        const db = await super.openDb();
        carro.id = getRandomInt();
        db.carros.push(carro);
        await super.saveDb(db);
    }


    public async update(carro: ICarro): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.carros.length; i++) {
            if (db.carros[i].id === carro.id) {
                db.carros[i] = carro;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Carro not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.carros.length; i++) {
            if (db.carros[i].id === id) {
                db.carros.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Carro not found');
    }
}

export default CarroDao;
