"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoacheesService = /** @class */ (function () {
    function CoacheesService() {
        this.rests = [
            {
                id: "bread-bakery",
                name: "Bread & Bakery",
                category: "Bakery",
                sessoes: "2",
                rating: 4.9,
                imagePath: "assets/img/restaurants/breadbakery.png"
            },
            {
                id: "burger-house",
                name: "Burger House",
                category: "Hamburgers",
                sessoes: "10",
                rating: 3.5,
                imagePath: "assets/img/restaurants/burgerhouse.png"
            }
        ];
    }
    CoacheesService.prototype.ngOnInit = function () {
    };
    CoacheesService.prototype.coachees = function () {
        return this.rests;
    };
    return CoacheesService;
}());
exports.CoacheesService = CoacheesService;
