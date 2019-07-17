import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule } from '@angular/material';
import {MainComponent} from "./main.component";
import {ProfileModule} from "../../components/profile/profile.module";
import {RouterModule} from "@angular/router";
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        ProfileModule,
        RouterModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatSnackBarModule,
    ]
})
export class MainModule { }
