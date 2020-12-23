import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from "../model/model"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService : UserService) { }

  name: String=""
  userList = []
  user: User


  ngOnInit(): void {
    this.searchUser()
  }



  searchUser(){

    let regex  = new RegExp(String(this.name), 'i')

    this.userService.fetchUserList().subscribe(res=>{
      console.log(res)
      this.userList = res
        if (this.name){
          let list = this.userList.filter((u)=>{
            console.log(u.name);
            
            return u.name.match(regex)
          })
          this.userList = list          
        }
    })
  }

  selectUser(user){
    this.user= user
  }



}
