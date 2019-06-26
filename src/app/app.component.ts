import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
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
}
