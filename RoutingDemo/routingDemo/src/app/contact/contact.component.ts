import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ts:TestService) { }

  ngOnInit(): void {
  }

  mobiles=this.ts.mobiles;

  addMobile(){
    this.ts.mobiles.push('Redmi');
  }

}
