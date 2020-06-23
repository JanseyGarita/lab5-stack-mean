import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers:[PersonService]
})
export class PersonComponent implements OnInit {
  constructor(public personService: PersonService) {}

  addPerson(formData) {}

  ngOnInit(): void {}
}
