import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedin:Boolean=false;
  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userDate=>{
      if(userDate.emailVerified){
        this.isLoggedin=true;
      }else{
        this.isLoggedin=false;
      }
    })
  }

}
