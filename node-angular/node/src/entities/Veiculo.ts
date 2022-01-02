import { IVeiculos } from "./IVeiculo";


export class Veiculo implements IVeiculos {
    modelo?: string;
    anoFabricacao?: number;
    quantidadePortas?: number;
    marca?: string;
}