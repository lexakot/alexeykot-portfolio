import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {MenuModule} from "../../components/menu/menu.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProjectsModule { }
