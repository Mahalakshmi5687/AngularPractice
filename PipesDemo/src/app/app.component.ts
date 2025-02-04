import { Component } from '@angular/core';
import { FactorialPipe } from './factorial.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  name = 'Barbie';
  Greetings ="Welcome to the Wonderla";
  amount = 40;
  registration = {
    "firstName": "Willy",
    "lastName": "Wonka",
    "DOB": "March"

  };
  date = new Date();
}
