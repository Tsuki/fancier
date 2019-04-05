import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '~/app.module';
import {environment} from '~env/environment';
import 'default-passive-events';

if (environment.production) {
  enableProdMode();
  window.console.log = () => {
  };
}


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
