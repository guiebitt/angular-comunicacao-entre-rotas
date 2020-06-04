import { IProduto } from '../src/app/core/entities/produto.interface';

export const collectionName = 'produtos';

export const produtos: IProduto[] = [
  { id: '1213707c-d8fd-4a62-b212-ab820e148837', codigo: 'A1', descricao: 'Produto A1' },
  { id: 'c3f27593-1915-4ad8-8649-eb0673207e73', codigo: 'A2', descricao: 'Produto A2' },
  { id: '72d8812a-225d-4aac-886d-f98a2136fa52', codigo: 'B1', descricao: 'Produto B1' },
  { id: '800774f2-41ba-4509-9ec5-b034bab31d1b', codigo: 'B2', descricao: 'Produto B2' },
  { id: 'a790d624-d057-43f1-bcf0-c29a15b9eecf', codigo: 'C1', descricao: 'Produto C1' }
];
