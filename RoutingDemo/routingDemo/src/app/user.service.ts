import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users=[
    {
      "id":1,
      "name":"Leanne Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    },
    {
      "id":2,
      "name":"Leanne2 Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    },
    {
      "id":3,
      "name":"Leanne3 Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    },
    {
      "id":4,
      "name":"Leanne4 Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    },
    {
      "id":5,
      "name":"Leanne5 Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    },
    {
      "id":6,
      "name":"Leanne6 Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "img":"",
      "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone":"92848028484"
    }
  ]
}
