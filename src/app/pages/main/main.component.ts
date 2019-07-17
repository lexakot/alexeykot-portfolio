import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth-service";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  person = {
    name: "Alexey",
    surname: "Kot",
    githubUrl: "Github",
    otherInfo: "Other",
    bio: "bio",
    projects: [
      {
        name: "TestProject",
        year: '2012',
        href: 'Link1',
      },
      {
        name: "TestProject2",
        year: '2012',
        href: 'Link2',
      },
    ]
  }
  constructor(public authService: AuthService, public snackBar: MatSnackBar) { }

  message: string = 'You have no permissions';
  actionButtonLabel: string = 'Close';
  autoHide: number = 2000;

  open() {
    let user = this.authService.GetUser()
    let config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    if (user.role !== 'admin') {
      this.snackBar.open(this.message, this.actionButtonLabel, config);
    }
  }
  ngOnInit() {
  }

}
