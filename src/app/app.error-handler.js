"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMessager;
        if (error instanceof http_1.Response) {
            errorMessager = "Erro " + error.status + " ao obter a URL " + error.url + " - {erro.statusText}";
        }
        else {
            errorMessager = error.toString();
        }
        console.log(errorMessager);
        return observable_1.Observable.throw(errorMessager);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
