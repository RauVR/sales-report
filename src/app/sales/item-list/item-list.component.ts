import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  tittle='Item List';
  date: Date = new Date();
  simpleDate!:string | null;
  discount =20;

  items: any[]=[
    {
      id:1,
      name:'iPhone 12',
      desc: 'Refurbished iPhone12',
      price: 600
    },
    {
      id:2,
      name:'Samsung S22',
      desc: 'Samsung Galaxy S series phone',
      price: 1199
    },
    {
      id:3,
      name:'Asus ROG Phone 5',
      desc: 'Asus gaming Phone',
      price: 599
    }
  ]

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  updateDate(): void {
    this.date=new Date();
    this.simpleDate=this.datePipe.transform(this.date, 'short');
  }

}
