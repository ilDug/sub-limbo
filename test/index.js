"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var dist_1 = require("../dist");
var source = rxjs_1.interval(1000).pipe(operators_1.take(10));
var subs = new dist_1.Limbo();
subs.oblium = source
    .pipe()
    .subscribe(function (val) { return console.log(val); });
setTimeout(function () {
    console.log('timeout');
    subs.forget();
}, 5000);
