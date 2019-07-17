import { Component, OnInit } from '@angular/core';
import {Project, ProjectsApiService} from "../../services/projects-api-service";
import { MatDialog } from '@angular/material';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsApiService: ProjectsApiService, public dialog: MatDialog) {
    this.projects.subscribe(console.log)  }


  openDialog(): void {
    this.dialog.open(AddProjectDialogComponent, {
      width: '500px',
    });
  }
  public ngOnInit() {
  }
  public projects: Observable<Project[]> = this.projectsApiService.get();
}
