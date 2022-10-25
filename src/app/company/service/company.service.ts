import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company} from '../company.model'
@Injectable()
export class CompanyService {
  public baseurl: string
  public company:Company[]
  constructor(private http: HttpClient) {
    this.company = []
    this.baseurl = "http://localhost:3000/"
  }

 public GetData():Observable<Company[]> {
    const url = this.baseurl + "companyList"
    return this.http.get<Company[]>(url);
  }

}
