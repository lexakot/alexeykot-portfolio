import { Component, OnInit } from '@angular/core';
import {Project, ProjectsApiService} from "../../services/projects-api-service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
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

  constructor(private projectsApiService: ProjectsApiService, private fb: FormBuilder) {
    this.projects.subscribe(console.log)
  }
  addProject() {
    this.projectsApiService.set(this.form.value)
    this.form.reset();
  }
  public ngOnInit() {
    this.form = this.fb.group({
      name: '',
      year: '',
    })
  }
  public projects: Observable<Project[]> = this.projectsApiService.get();
  public form: FormGroup;
}
