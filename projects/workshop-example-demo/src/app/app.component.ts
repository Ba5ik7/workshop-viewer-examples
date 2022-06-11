import { Component, OnInit } from '@angular/core';
import { EXAMPLE_COMPONENTS } from '@tmdjr/workshop-examples/src/example-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workshop-example-demo';

  exampleComponents = EXAMPLE_COMPONENTS;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(EXAMPLE_COMPONENTS);
  }
}
