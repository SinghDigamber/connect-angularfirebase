import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase main module
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Firebase other modules
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Required for everything + optionly pass your app name instead 'my-app-name'
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),

    AngularFirestoreModule,     // Only required for database features
    AngularFireAuthModule,     // Only required for auth features,
    AngularFireStorageModule   // Only required for storage features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
