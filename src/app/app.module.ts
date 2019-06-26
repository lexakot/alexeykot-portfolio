import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environments';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ProjectsApiService } from './services/projects-api-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    
    ...COMPONENTS,
  ],
  providers: [
    ProjectsApiService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
