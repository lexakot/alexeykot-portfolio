import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthService} from "../../auth/auth-service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AuthModule as AuthModule1} from "../../auth/auth.module";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule1,
  ],
})
export class AuthPageModule { }
