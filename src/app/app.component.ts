import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nagi Reddy Instagram';
 

ngOnInit(){
  var firebaseConfig = {
    apiKey: "AIzaSyBsUBQRe8vvn6NLC4OHfUJhgiZ93-BP6Mg",
    authDomain: "nagi-reddy-instagram.firebaseapp.com",
    databaseURL: "https://nagi-reddy-instagram.firebaseio.com",
    projectId: "nagi-reddy-instagram",
    storageBucket: "nagi-reddy-instagram.appspot.com",
    messagingSenderId: "510482351613",
    appId: "1:510482351613:web:1de7c04258690e312f8594"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}