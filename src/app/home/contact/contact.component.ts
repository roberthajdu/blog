import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSubmitted: boolean = false;
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    service: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private readonly formService: FormService
  ) {};

  onSubmit() {
    this.formService.submitForm(this.contactForm.value).subscribe(_ => {
      this.isSubmitted = true;
    })
  };

  ngOnInit() {
  };

}
