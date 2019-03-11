import {Response} from '@angular/http'
import { Observable } from "rxjs/observable";

export class ErrorHandler{
  static handlerError(error: Response | any){
    let errorMessager: string

    if (error instanceof Response){
      errorMessager = `Erro ${error.status} ao obter a URL ${error.url} - {erro.statusText}`
    }else{
      errorMessager = error.toString()
    }

    console.log(errorMessager)
    return Observable.throw(errorMessager)
  }
}
