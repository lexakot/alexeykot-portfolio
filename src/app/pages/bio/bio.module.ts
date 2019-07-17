import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatExpansionModule, MatChipsModule } from '@angular/material';
import { BioComponent } from './bio.component';
import {MenuModule} from "../../components/menu/menu.module";

@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    MenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
  ]
})
export class BioModule { }
