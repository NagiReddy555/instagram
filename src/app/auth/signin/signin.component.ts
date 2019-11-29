import { UserseviseService } from './../../usersevise.service';
import { GetdatafromdbService } from './../../getdatafromdb.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private toastser:ToastrService,
    private myfire:GetdatafromdbService,
    private userservise:UserseviseService,
    private router:Router) { }

  ngOnInit() {
  }
  submit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    firebase.auth().signInWithEmailAndPassword(email,password).then(userData =>{
      if(userData.user.emailVerified){
        this.myfire.GetdatafromdbService(userData.user.uid).then(userDatafromdb=>{
          this.userservise.set(userDatafromdb);
          const message=`${email} has been successfully verified`;
        this.toastser.success(message);
        this.router.navigate(["/addimages"]);
        }).catch(err=>console.log(err));
        
      }else{
        const message=`${email} has not been sent successfully verified`;
        this.toastser.error(message);
        firebase.auth().signOut();
      }
      
    }).catch(err=>{
      this.toastser.error(err.message);
      console.log(err);
    });
  
  }
}
