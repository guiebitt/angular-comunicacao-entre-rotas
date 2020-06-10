import { v4 as uuidv4 } from 'uuid';
import { IProduto } from './produto.interface';

export class Produto implements IProduto {

  id: string;
  codigo: string;
  descricao: string;

  public static novoProduto(): Produto {
    return new Produto({
      id: uuidv4(),
      codigo: null,
      descricao: null
    });
  }

  constructor(produto: IProduto) {
    this.id = produto.id;
    this.codigo = produto.codigo;
    this.descricao = produto.descricao;
  }
}
