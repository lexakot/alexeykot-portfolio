import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

export interface Project {
  name: string;
  year: string;
}

@Injectable()
export class ProjectsApiService {
  constructor(private db: AngularFireDatabase) {
  }
  public get() {
    return this.db.list('projects').valueChanges();
  }
  public set(project) {
    return this.db.list('projects').push(project);
  }
}