import { NgModule } from '@angular/core';
import {MenuComponent} from "./menu.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [MenuComponent, MenuItemComponent],
    imports: [CommonModule],
    exports: [MenuComponent, MenuItemComponent],
})
export class MenuModule { }
