import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Project, ProjectsApiService} from "../../../services/projects-api-service";
import { MatDialogRef } from '@angular/material';
import {Observable} from "rxjs";



@Component({
  selector: 'add-project-dialog',
  templateUrl: 'add-project-dialog.component.html',
  styleUrls: ['add-project-dialog.scss'],
})
export class AddProjectDialogComponent {

  constructor(
    private projectsApiService: ProjectsApiService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
  ) { }



  tagList = [
    'Angular',
    'NodeJs',
    'React',
    'React Native',
    'CSS/HTML',
  ]
  addProject() {
    let obj = {
      name: this.form.value.name,
      startDate: +this.form.value.startDate,
      endDate: +this.form.value.endDate,
      description: this.form.value.description,
      tags: this.form.value.tags,
    }
    this.projectsApiService.set(obj)
    this.dialogRef.close();
  }

  public ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.minLength(5), Validators.required]],
      tags: [],
    })
  }
  public projects: Observable<Project[]> = this.projectsApiService.get();
  public form: FormGroup;
}