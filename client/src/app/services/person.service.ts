import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import {PersonComponent } from '../components/person/person.component';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  selectedPerson: Person;
  readonly URL_API = 'http://localhost:3000/api/people';
  people :Person[];

  constructor(private http: HttpClient) { }

  getPeople() {

    return this.http.get(this.URL_API);
  }

  postPerson(person: Person){

    return this.http.post(this.URL_API, person);
  }

  putPerson(person : Person){
   
     return this.http.put(this.URL_API +`/${person._id}`, person);

  }

  deletePerson(id: string){
    return  this.http.delete(this.URL_API+`/${id}`);

  }
}
