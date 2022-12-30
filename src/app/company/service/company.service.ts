import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company.model'
@Injectable()
export class CompanyService {
  public baseurl: string
  public company: Company[]
  constructor(private http: HttpClient) {
    this.company = []
    this.baseurl = "http://localhost:3000/"
  }

  public GetData(): Observable<Company[]> {
    const url = this.baseurl + "companyList"
    return this.http.get<Company[]>(url);
  }

  public getDataById(id: number): Observable<Company> {
    const url = this.baseurl + "companyList/" + id;
    return this.http.get<Company>(url);
  }

  public PostData(company: Company): Observable<Company> {
    const url = this.baseurl + "companyList"
    return this.http.post<Company>(url, company)
  }
  public DeleteData(id: number): Observable<Company> {
    const url = this.baseurl + "companyList/" + id
    return this.http.delete<Company>(url)
  }
  public UpdateData(company: Company, id: number): Observable<Company> {
    const url = this.baseurl + "companyList/" + id;
    return this.http.put<Company>(url, company)
  }

}
