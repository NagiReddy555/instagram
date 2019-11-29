import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr:ToastrService) { }
submit(form:NgForm){
  const email=form.value.email;
  const fullname=form.value.fullname;
  const username=form.value.username;
  const password=form.value.password;
  firebase.auth().createUserWithEmailAndPassword(email,password).then(userData =>{
    console.log(userData);
    this.toastr.success(`success email has been sent to ${email}`);
  userData.user.sendEmailVerification();
    firebase.database().ref("/users" + userData.user.uid).set({
      uid:userData.user.uid,
      email,
      password,fullname,username,registrationDate:new Date().toString()
    })
  }).catch(err=>{
    this.toastr.error(err.message);
    console.log(err);
  });

}
  ngOnInit() {
  }

}

