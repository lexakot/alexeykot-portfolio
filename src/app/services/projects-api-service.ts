import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface Project {
  name: string;
  date: number;
  description: string;
}

@Injectable()
export class ProjectsApiService {
  private
  constructor(private db: AngularFireDatabase) {
  }
  public get(): Observable<Project[]> {
    return this.db.list('projects').valueChanges().pipe(
      // map(projects => projects.map(
      //   project => ({
      //     name: project.name,
      //     year: new Date(project.year),
      //   })
      // ))
    ) as Observable<Project[]>;
  }
  public set(project) {
    return this.db.list('projects').push(project);
  }
}