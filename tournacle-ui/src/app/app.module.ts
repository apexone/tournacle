import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {rootReducer} from './store/store';

export function configureStoreDevtoolsModule() {
  return (!environment.production ? [StoreDevtoolsModule.instrument({
    maxAge: 25
  })] : []);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([]),
    configureStoreDevtoolsModule()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
