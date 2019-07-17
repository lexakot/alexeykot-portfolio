import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatExpansionModule } from '@angular/material';
import { BioComponent } from './bio.component';
import {MenuModule} from "../../components/menu/menu.module";

@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    MenuModule,
    MatDividerModule,
    MatExpansionModule,
  ]
})
export class BioModule { }
