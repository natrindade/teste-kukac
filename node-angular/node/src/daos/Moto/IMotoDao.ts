import { IMoto } from "@entities/IMoto";


export interface IMotoDao {
    getOne: (id: number) => Promise<IMoto | null>;
    getAll: () => Promise<IMoto[]>;
    add: (moto: IMoto) => Promise<void>;
    update: (moto: IMoto) => Promise<void>;
    delete: (id: number) => Promise<void>;
}