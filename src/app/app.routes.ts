import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {ListcoacheeComponent} from './listcoachee/listcoachee.component'
import {CoacheeDetalheComponent} from './coachee-detalhe/coachee-detalhe.component'
import {AboutComponent} from './about/about.component'





export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listcoachee', component: ListcoacheeComponent},
  {path: 'listcoachee/:id', component: CoacheeDetalheComponent},
  {path: 'about', component: AboutComponent}

]
