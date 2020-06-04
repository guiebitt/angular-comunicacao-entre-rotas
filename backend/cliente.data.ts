import { dataService, IBackendService } from 'web-backend-api';
import { clientes, collectionName } from './cliente.mock';

dataService(collectionName, (dbService: IBackendService) => {

  clientes.forEach((customer) => {
    dbService.storeData(collectionName, customer);
  });
});
