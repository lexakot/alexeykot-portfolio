import { Component, OnInit } from '@angular/core';
import {Project, ProjectsApiService} from "../../services/projects-api-service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  constructor(private projectsApiService: ProjectsApiService) { }

  ngOnInit() {
  }

  public projects: Observable<Project[]> = this.projectsApiService.get();
}
