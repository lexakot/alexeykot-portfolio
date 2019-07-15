import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectsApiService } from './services/projects-api-service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit  {
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
