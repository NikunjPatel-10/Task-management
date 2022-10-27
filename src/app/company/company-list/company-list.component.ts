import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
public companyData:any
  constructor(private companyservice:CompanyService,private datacommunication:DataCommunicationService) { }

  ngOnInit(): void {

this.datacommunication.getListData.subscribe(data=>{

  if(data){
    this.GetCompanyList()
  }
})
    this.GetCompanyList()
  }

  GetCompanyList(){
    this.companyservice.GetData().subscribe(res=>{
      // console.log(res); 
      // console.log("hello"); 
      this.companyData = res
    })
  }

}
