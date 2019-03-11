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
import { CoacheeDetalheComponent } from './coachee-detalhe/coachee-detalhe.component';
import { CoacheeMenuComponent } from './coachee-detalhe/coachee-menu/coachee-menu.component';
import { MenuItemComponent } from './coachee-detalhe/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ListcoacheeComponent,
    CoacheeComponent,
    CoacheeDetalheComponent,
    CoacheeMenuComponent,
    MenuItemComponent
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
