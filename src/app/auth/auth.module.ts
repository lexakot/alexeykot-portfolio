import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth-service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AuthGuardService} from "./auth.guard";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule
    ],
    providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
