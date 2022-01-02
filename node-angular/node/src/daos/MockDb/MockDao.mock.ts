import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import { IMoto } from '@entities/IMoto';
import { ICarro } from '@entities/ICarro';


interface IDatabase {
    users: IUser[];
    carros: ICarro[];
    motos: IMoto[];
}


class MockDaoMock {

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }


    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default MockDaoMock;
