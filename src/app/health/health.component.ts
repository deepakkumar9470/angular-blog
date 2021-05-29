import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
  
  healthDataDisplay:any = []
  ngOnInit(): void {
     this._service.healthHeading().subscribe((res)=>{
       this.healthDataDisplay = res.articles 
     })
  }

}
