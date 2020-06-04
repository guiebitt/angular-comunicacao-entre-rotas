import { v4 as uuidv4 } from 'uuid';
import { ICliente } from './cliente.interface';

export class Cliente implements ICliente {

  id: string;
  nome: string;

  public static novoCliente(): Cliente {
    return new Cliente({
      id: uuidv4(),
      nome: null
    });
  }

  constructor(cliente: ICliente) {
    this.id = cliente.id;
    this.nome = cliente.nome;
  }
}
