import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private us:UserService) { }
  cuser;
  ngOnInit(): void {
    // this.route.paramMap.subscribe(
    //   params=>{
    //     let userid= +params.get('id');
    //     this.cuser = this.us.users.find(u=>u.id==userid)
    //   }
    // )
    //another way
   
    let userid=  +this.route.snapshot.paramMap.get('id');
    this.cuser = this.us.users.find(u=>u.id==userid)
  }

}
