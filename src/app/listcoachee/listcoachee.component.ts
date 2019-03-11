import { Component, OnInit } from '@angular/core';
import { Coachee } from './coachee/coachee.model';
import { CoacheesService } from './coachees.service';

@Component({
  selector: 'mt-listcoachee',
  templateUrl: './listcoachee.component.html'
})

export class ListcoacheeComponent implements OnInit {

  coachees: Coachee[]

  constructor(private coacheesService: CoacheesService) { }

  ngOnInit() {
    this.coachees = this.coacheesService.coachees()
  }

}
