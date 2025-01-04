import { Component, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(HeaderComponent) header: any;

  @ViewChild("temp") change: any;

  @ViewChild("test") d: any;

  @ViewChild("para") p: any;

  @ViewChildren("heading") h: any;
  cdata1:any;

  testForViewChildren(){
    console.log(this.p.nativeElement.innerText);
    for(let ele of this.h){
      console.log(ele.nativeElement.innerText); 
    }
    console.log(this.h); 
    console.log(this.h._results[0].nativeElement.innerText);
  }
  // ngAfterViewInit(){//initializes after view(html) file is executed.
  //   console.log(this.d.nativeElement);
  //   this.d.nativeElement.onkeyup=()=>{
  //     console.log(this.d.nativeElement.value);
  //   }
  // }
  test(){
   this.cdata1 = this.header.passthroughViewChild();
  }

  title = 'Demo';
  ctitle = 'test';
  carr = [1,2,3,5,6]

  ctitle1 = 'test1'
  carr1 = [10,20,30,50,60]
  cdata: any;

  changeinElement(){
    this.change.nativeElement.style.color="orange";
    this.change.nativeElement.innerText="hello";
    this.change.nativeElement.style.background="black"
  }
}
