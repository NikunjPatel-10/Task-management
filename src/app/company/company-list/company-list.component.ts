import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
public companyData:any
  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
    this.GetCompanyList()
  }

  GetCompanyList(){
    this.companyservice.GetData().subscribe(res=>{
      console.log(res); 
      console.log("hello"); 
      this.companyData = res
    })
  }

}
