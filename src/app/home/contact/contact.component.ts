import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(
    private readonly formService: FormService
  ) {
  }

  ngOnInit(): void {
  }

  lel(): void {
    this.formService.submitForm().subscribe();
  }


}
