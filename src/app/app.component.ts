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
  login(){
    console.log(this.user)
    console.log(this.pass)
  }
}
