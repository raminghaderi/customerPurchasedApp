import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {

    this.title = 'this is Ramin';
  }

}
