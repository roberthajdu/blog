import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClientModule
  ) {
    this.form = this.formBuilder.group({
      name: ['d', Validators.required],
      email: [''],
      mobile: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handleSubmit(event: any): any {
    event.preventDefault();
    let formData = new FormData().append('name', 'a');
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode(this.form).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))

  }

  encode(data: any): string {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

}
