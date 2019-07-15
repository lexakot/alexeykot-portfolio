import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environments';

import { AppComponent } from './app.component';
import { ProjectsApiService } from './services/projects-api-service';
import {AppRoutingModule} from "./app.routing";
import {AuthPageModule} from "./pages/auth/auth-page.module";
import {BioModule} from "./pages/bio/bio.module";
import {ProjectsModule} from "./pages/projects/projects.module";
import {MainModule} from "./pages/main/main.module";


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AuthPageModule,
    BioModule,
    ProjectsModule,
    MainModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ProjectsApiService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
