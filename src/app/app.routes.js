"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var listcoachee_component_1 = require("./listcoachee/listcoachee.component");
var coachee_detalhe_component_1 = require("./coachee-detalhe/coachee-detalhe.component");
var about_component_1 = require("./about/about.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'listcoachee', component: listcoachee_component_1.ListcoacheeComponent },
    { path: 'listcoachee/:id', component: coachee_detalhe_component_1.CoacheeDetalheComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
