import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  user!:string;
  pass!:string;
  saveName!:boolean;
  login(){
    console.log(this.user)
    console.log(this.pass)
    if(this.saveName){
      this.deletePass()
    }
    else{this.deleteInputs()}
  }
  setCheck(){
    if(this.saveName==true){
      this.saveName=false
    }
    else{this.saveName=true}
  }
  deleteInputs(){
    this.user=''
    this.pass=''
  }
  deletePass(){
    this.pass=''
  }
}
