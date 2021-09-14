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
    isAccepted: new FormControl(false)
  });

  constructor(
    private readonly formService: FormService
  ) {};

  onSubmit() {
    this.formService.submitForm(this.contactForm.value).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            this.isSubmitted = true;
          } else {
            alert("Something went wrong when sending your message.");
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    )
  };

  ngOnInit() {
  };

}
