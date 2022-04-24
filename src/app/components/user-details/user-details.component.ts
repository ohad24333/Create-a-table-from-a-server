import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number = 0;

  constructor(private _usersService: UsersService,
                      _activatedRoute : ActivatedRoute)
                      {
                           _activatedRoute.params.subscribe((params:Params) => {
                                 this.id = params['id'];
                           });  
  }

  user : User = {} as User;

  ngOnInit(): void {
      this._usersService.getUser(this.id)
                        .subscribe((u :any) => this.user = u );
  }

}
