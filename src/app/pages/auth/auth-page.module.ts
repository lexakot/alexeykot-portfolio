import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule as AuthModule1} from "../../auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatTooltipModule, } from '@angular/material';
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule1,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
})
export class AuthPageModule { }
