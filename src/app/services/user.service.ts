import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path="https://jsonplaceholder.typicode.com/users"
  
  constructor(private http: HttpClient) { }

  fetchUserList(){
    return this.http.get<[]>(this.path)
  } 

}
