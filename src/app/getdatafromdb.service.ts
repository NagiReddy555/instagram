import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GetdatafromdbService {

  constructor() { }
  GetdatafromdbService(uid){
    var ref=firebase.database().ref("users" +uid);
    return ref.once("value").then(snapData=>snapData.val()).catch(err=>console.log(err));
  }
}
