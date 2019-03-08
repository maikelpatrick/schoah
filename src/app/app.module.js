"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var listcoachee_component_1 = require("./listcoachee/listcoachee.component");
var coachee_component_1 = require("./listcoachee/coachee/coachee.component");
var coachees_service_1 = require("./listcoachee/coachees.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                listcoachee_component_1.ListcoacheeComponent,
                coachee_component_1.CoacheeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES)
            ],
            providers: [coachees_service_1.CoacheesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
