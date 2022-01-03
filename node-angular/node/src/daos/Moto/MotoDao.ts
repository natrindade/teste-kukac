import { IMoto } from '@entities/IMoto';
import { getRandomInt } from '@shared/functions';
import MockDaoMock from '../MockDb/MockDao.mock';
import { IMotoDao } from './IMotoDao';



class MotoDao extends MockDaoMock implements IMotoDao {


    public async getOne(id: number): Promise<IMoto | null> {
        const db = await super.openDb();
        for (const moto of db.motos) {
            if (moto.id === id) {
                return moto;
            }
        }
        return null;
    }


    public async getAll(): Promise<IMoto[]> {
        const db = await super.openDb();
        return db.motos;
    }


    public async add(moto: IMoto): Promise<void> {
        const db = await super.openDb();
        moto.id = getRandomInt();
        db.motos.push(moto);
        await super.saveDb(db);
    }


    public async update(moto: IMoto): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.motos.length; i++) {
            if (db.motos[i].id === moto.id) {
                db.motos[i] = moto;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Moto not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.motos.length; i++) {
            if (db.motos[i].id === id) {
                db.motos.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Moto not found');
    }
}

export default MotoDao;
