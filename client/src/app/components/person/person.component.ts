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
  ngOnInit(): void {
    this.getPeople();
  }

  addPerson(formData: NgForm) {

    if(formData.value._id){
      this.personService.putPerson(formData.value).
      subscribe(res=>{
        this.resetForm(formData);
        M.toast({html:'Updated!'});
        this.getPeople();
      });
    }else{
    this.personService.postPerson(formData.value)
    .subscribe(res=>{
      this.resetForm(formData);
      M.toast({html:'Saved!'});
      this.getPeople();
    });
  }
  }

  getPeople(){

    this.personService.getPeople()
    .subscribe(res=>{
      this.personService.people = res as Person[];
    });
  }

editPerson(person : Person){
this.personService.selectedPerson = person;
}


deletePerson(_id:string){
  if(confirm('Are you sure you want to delete it?')){
this.personService.deletePerson(_id).
subscribe(res=>{

  M.toast({html:'Deleted!'});
  this.getPeople();
});
  }
}
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personService.selectedPerson = new Person();
    }
  }
}
