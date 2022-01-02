import { ICarro } from "@entities/ICarro";

export interface ICarroDao {
    getOne: (id: number) => Promise<ICarro | null>;
    getAll: () => Promise<ICarro[]>;
    add: (carro: ICarro) => Promise<void>;
    update: (carro: ICarro) => Promise<void>;
    delete: (id: number) => Promise<void>;
}