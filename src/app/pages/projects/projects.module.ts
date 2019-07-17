import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatListModule, MatButtonModule } from '@angular/material';
import { ProjectsComponent } from './projects.component';
import {MenuModule} from "../../components/menu/menu.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AddProjectDialogModule } from './add-project-dialog/add-project-dialog.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    AddProjectDialogModule,
    MatButtonModule,
  ]
})
export class ProjectsModule { }
