import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ts:TestService) { }//if we use public in place of private we can directly access in view file only

  ngOnInit(): void {
  }
  mobiles=this.ts.mobiles;

}
