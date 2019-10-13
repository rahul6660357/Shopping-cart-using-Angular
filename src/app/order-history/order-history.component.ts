import { Component, OnInit } from '@angular/core';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
   History;

  constructor(private service: ItemserviceService) { }

  ngOnInit() {
    this.service.getHistory().subscribe((data) => {
      this.History = data;
    });
  }

}
