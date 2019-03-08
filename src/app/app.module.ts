import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListcoacheeComponent } from './listcoachee/listcoachee.component';
import { CoacheeComponent } from './listcoachee/coachee/coachee.component';
import { CoacheesService } from './listcoachee/coachees.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ListcoacheeComponent,
    CoacheeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CoacheesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
