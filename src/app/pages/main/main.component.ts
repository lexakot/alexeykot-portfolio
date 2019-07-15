import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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
  constructor() { }

  ngOnInit() {
  }

}
