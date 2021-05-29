import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sportsDisplay:any= []

  ngOnInit(): void {
    this._services.sportsHeading().subscribe((res)=>{
      console.log(res)
      this.sportsDisplay = res.articles
    })
  }
}
