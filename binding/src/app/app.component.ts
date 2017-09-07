import { Component, ViewEncapsulation, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
   /* Create variable */
    title:string;
    FirstName: string;
    LastName: string;
    

  ngOnInit() {
    /** Assign values to the variable after OnInit */
    this.title = 'Binding';
    this.FirstName = 'Santhosh Kumar';
    this.LastName = 'Marappe'
  }
}