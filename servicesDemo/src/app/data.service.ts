import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["john Mathew", "E354", "jd@abc.net"]
  info2: string[]=["Robin wilson", "E355", "rew@abc.net"]
  info3: string[]=["Rose Adams", "E356", "ie@abc.net"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
  }
  constructor() { }
}
