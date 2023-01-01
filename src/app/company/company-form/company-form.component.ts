import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public isSubmitted: boolean;
  public id !: number;
  public companyData: any;
  public text: string

  /**
   * 
   * @param formbuilder 
   * @param companyservice 
   * @param datacommunication 
   * @param activatedRoute 
   */
  constructor(private formbuilder: FormBuilder,
    private companyservice: CompanyService,
    private datacommunication: DataCommunicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.text = '';
    this.isSubmitted = false
    this.companyForm = this.formbuilder.group({

      companyname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(6)]],
      companydescription: ['', Validators.required],
      companytags: ['', Validators.required],
      companylogo: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getDataById();
    })

    this.text = (this.id) ? 'Update' : 'Add'
  }

  SaveCompanyForm() {
    if (this.id) {
      this.companyservice.UpdateData(this.companyForm.value, this.id).subscribe(res => {
        this.datacommunication.companyListData(res);
      })
      this.router.navigate(['company/add'])
    }
    else {
      this.isSubmitted = true
      if (this.companyForm.valid) {
        this.isSubmitted = false
        this.companyservice.PostData(this.companyForm.value).subscribe(res => {
          this.datacommunication.companyListData(res)
          this.companyForm.reset();
        })
      }
    }

    // this.isSubmitted = false

  }

  public getDataById() {
    this.companyservice.getDataById(Number(this.id)).subscribe(res => {
      this.companyData = this.companyForm.patchValue(res);
    })
  }

  public CancelButton(): void {
    this.router.navigate(['company/add'])
  }
  get companyFormControl() {
    return this.companyForm.controls
  }

}
