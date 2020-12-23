import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from "../model/model"

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit, OnChanges {

  @Input() user : User
  showUser;
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(){
  }

}
