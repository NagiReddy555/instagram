import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserseviseService {

  constructor() { }
  set(getdatafromdb){
localStorage.setItem('user',JSON.stringify(getdatafromdb))
  }
  destroy(){
localStorage.removeItem('user');
  }
}
