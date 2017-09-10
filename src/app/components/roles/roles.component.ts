import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: []
})
export class RolesComponent implements OnInit {

profile:any;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
    
        } else {
          this.auth.getProfile((err, profile) => {
            this.profile = profile;
          });

console.log(this.profile)



        }
      }
}
