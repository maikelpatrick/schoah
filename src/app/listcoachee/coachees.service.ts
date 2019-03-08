import {Injectable} from '@angular/core'

import {Http} from '@angular/http'

import {Coachee} from "./coachee/coachee.model"

import {Observable} from "rxjs/Observable"

import 'rxjs/add/operator/map'

import {COACH_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class CoacheesService {


  constructor(private http: Http){ }

    coachees(): Observable<Coachee[]> {
      return this.http.get(`${COACH_API}/coachees`)
        .map(response => response.json())
    }
}
