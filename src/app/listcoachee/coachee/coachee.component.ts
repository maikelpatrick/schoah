import { Component, OnInit, Input } from '@angular/core';

import {Coachee} from './coachee.model'

@Component({
  selector: 'mt-coachee',
  templateUrl: './coachee.component.html'
})
export class CoacheeComponent implements OnInit {

  @Input() coachee: Coachee

  constructor() { }

  ngOnInit() {
  }

}
