import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormServiceService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      mobile: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.formService.submitForm(this.form).subscribe(e => console.log(e));
  }

}
