"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('meat App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.MeatPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('mt works!');
    });
});
