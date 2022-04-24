import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private _usersService:UsersService) {
        _usersService.getAllUsers()
                      .subscribe((result:any) => {
                        if(result){
                            this.users = result;
                        } 
                        else{
                          throw new Error("Couldnt Get Users..");
                        }
                      });
   }

  ngOnInit(): void {
  }

}
