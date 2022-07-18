import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assessment-2-Angular';
  username="";
  buttonStatus=false;

  enableButton(){
    if(this.username.length>0){
      this.buttonStatus=true;
    }else{
      this.buttonStatus=false;
    }
  }
  resetInput(){
    this.username="";
    this.buttonStatus=false;
  }
}
