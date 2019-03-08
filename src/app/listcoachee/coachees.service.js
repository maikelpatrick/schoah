"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var app_api_1 = require("../app.api");
var app_error_handler_1 = require("../app.error-handler");
var CoacheesService = /** @class */ (function () {
    function CoacheesService(http) {
        this.http = http;
    }
    CoacheesService.prototype.coachees = function () {
        return this.http.get(app_api_1.COACH_API + "/coachees1")
            .map(function (response) { return response.json(); })
            .catch(app_error_handler_1.ErrorHandler.handlerError);
    };
    CoacheesService = __decorate([
        core_1.Injectable()
    ], CoacheesService);
    return CoacheesService;
}());
exports.CoacheesService = CoacheesService;
