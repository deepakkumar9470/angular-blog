import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  techDataDisplay:any= []

  ngOnInit(): void {
    this._services.techHeading().subscribe((res)=>{
      console.log(res)
      this.techDataDisplay = res.articles
    })
  }

}
