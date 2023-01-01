import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: any
  public id!: number
  public deleteData: any
  public data: any
  public filterData: any
  /**
   * 
   * @param companyservice 
   * @param datacommunication 
   */
  constructor(private companyservice: CompanyService, private datacommunication: DataCommunicationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.datacommunication.getListData.subscribe(data => {
      if (data) {
        this.GetCompanyList()
      }
    })
    this.GetCompanyList();


  }

  GetCompanyList() {
    this.companyservice.GetData().subscribe(res => {
      // console.log(res); 
      // console.log("hello"); 
      this.companyData = res
    })
  }

  public deleteCompanyList(id: number) {
    this.companyservice.DeleteData(id).subscribe(res => {
      // this.deleteData = res;
      // console.log();
      alert("Are you sure do you want to delete")
      this.GetCompanyList();
    })
  }

  public editCompanyList(id: number) {
    this.router.navigate(['company/edit', id])
  }

}
