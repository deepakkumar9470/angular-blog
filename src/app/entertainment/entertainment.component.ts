import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from  '../service/newsapiservices.service'
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }

  enterDisplay:any = []
  ngOnInit(): void {
    this._service.enterHeading().subscribe((res)=>{
      this.enterDisplay = res.articles
    })
  }

}
