import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {ProfileModule} from "../../components/profile/profile.module";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        ProfileModule,
        RouterModule,
    ]
})
export class MainModule { }
