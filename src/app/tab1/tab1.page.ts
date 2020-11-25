import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 mobilenumber:number
 password:string
  constructor(public navCtrl:NavController) {}

 
login(){
  console.log("Username:"+ this.mobilenumber);
  console.log("Password:"+ this.password)
}
forget(){
  console.log("FORGET PASSWORD")
}
}

