import { Component, OnInit } from '@angular/core';

import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // To display data
  getDataDisplay:any= []

  ngOnInit(): void {
    this._services.topHeading().subscribe((res)=>{
      console.log(res)
      this.getDataDisplay = res.articles
    })
  }

}
