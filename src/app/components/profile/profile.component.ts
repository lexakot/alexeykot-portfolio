import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent  {
  @Input() person: Object;
}
