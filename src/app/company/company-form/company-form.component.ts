import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  languages = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'React' },
    { id: 7, name: 'Vue' },
];
  public companyForm: FormGroup;
  public isSubmitted:boolean
  /**
   * 
   * @param formbuilder 
   * @param companyservice 
   */
  constructor(private formbuilder: FormBuilder, private companyservice:CompanyService , private datacommunication:DataCommunicationService) {
    this.isSubmitted = false
    this.companyForm = this.formbuilder.group({

      companyname: ['' ,[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(6)]],
      companydescription: ['' ,Validators.required],
      companytags: ['' ,Validators.required],
      companylogo: ['' ,Validators.required]
    })
  }

  ngOnInit(): void {
  }

  SaveCompanyForm(){
    this.isSubmitted = true
    this.companyservice.PostData(this.companyForm.value).subscribe(res=>{
      this.datacommunication.companyListData(res)  
     
    })
    this.isSubmitted = false
    this.companyForm.reset();   
  }

  get companyFormControl() {
    return this.companyForm.controls
  }

}
