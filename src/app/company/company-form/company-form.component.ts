import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formbuilder: FormBuilder) {
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
    console.log(this.companyForm.value);
    
  }

  get companyFormControl() {
    return this.companyForm.controls
  }

}
