import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BackendConfigArgs, setupBackend } from 'web-backend-api';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

declare const require: any;

// Then we find all the mocks.
const context = require.context('../backend/', true, /\.data\.ts$/);
// And load the modules.
context.keys().map(context);

const config: BackendConfigArgs = {
    post204: false, // return the item in body after POST
    put204: false, // return the item in body after PUT
    delay: 1000,
    strategyId: 'uuid'
};
setupBackend(config, { dbtype: 'indexdb', databaseName: 'angular-comunicacao-entre-rotas' }).then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule).then(
        () => {
            console.log('[Backend]', 'Backend database application started!');
        }
    ).catch(err => console.error(err));
}).catch(err => console.error(err));
