import { Component, OnInit } from '@angular/core';
import {Details} from '../Details';
import { Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Names;
  constructor( private router: Router, private service: ItemserviceService) { }
  details = Details;


  ngOnInit() {
    this.service.getDetails().subscribe((data) => {
      this.Names = data;
    });
        }
gotodeatils(id1) {

  this.router.navigate(['/details'], {queryParams: {id: id1}});
}

}
