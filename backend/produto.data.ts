import { dataService, IBackendService } from 'web-backend-api';
import { collectionName, produtos } from './produto.mock';

dataService(collectionName, (dbService: IBackendService) => {

  dbService.addQuickFilterMap(collectionName, {
    term: 'filtroRapido',
    fields: ['codigo', 'descricao']
  });

  produtos.forEach((produto) => {
    dbService.storeData(collectionName, produto);
  });
});
