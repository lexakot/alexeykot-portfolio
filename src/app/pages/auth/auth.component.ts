import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Project} from "../../services/projects-api-service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth-service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  signIn() {
  this.authService.SignIn(this.form.value.username, this.form.value.password).subscribe(
      result => {
        this.router.navigate(['../bio']);
        console.log(result)
      } ,
          error => alert(error))
  }
  public ngOnInit() {
    this.form = this.fb.group({
      username: '',
      password: '',
    })
  }
  public form: FormGroup;
}
