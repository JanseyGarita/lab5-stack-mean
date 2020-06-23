import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var M: any;
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService],
})
export class PersonComponent implements OnInit {
  constructor(public personService: PersonService) {}

  addPerson(formData: NgForm) {
    this.personService.postPerson(formData.value).subscribe((res) => {
      this.resetForm(formData);
      M.toast({ html: 'Saved' });
    });
  }

  ngOnInit(): void {}

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personService.selectedPerson = new Person();
    }
  }
}
