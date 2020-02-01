import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  availabityStatus = true;
  constructor(){
setTimeout(()=>{
      this.availabityStatus = false;
    },2000);
  }


  ngOnInit(){
    
  }
}
