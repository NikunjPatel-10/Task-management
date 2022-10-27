import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from '../company.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
public getListData : Subject<Company>
  constructor() {
    this.getListData = new Subject()
   }

   companyListData(company:Company){
    this.getListData.next(company)
   }
}
