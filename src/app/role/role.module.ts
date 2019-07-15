import { NgModule } from '@angular/core';
import {RoleGuardService} from "./role.guard";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    declarations: [],
    imports: [AuthModule],
    providers: [RoleGuardService]
})
export class RoleModule { }
