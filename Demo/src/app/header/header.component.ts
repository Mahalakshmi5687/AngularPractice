import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() childtitle: string | undefined;
    @Input() childarr: any;

    @Output() customeve = new EventEmitter();

    message = "passed to parent";
    data = "child to parent through template Reference.";
    data1 = "demo of view child";
    passToParent(){
      this.customeve.emit(this.message);
    }

    updateMessage(e: any){
      this.message = e.target.value;
    }

    passthroughViewChild(){
      return this.data1;
    }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
