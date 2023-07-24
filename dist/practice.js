"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//implements -> 해당 클래스가 Shape interface 조건을 충족하겠다고 명시
var TestComp = /** @class */ (function () {
    function TestComp(radius) {
        this.radius = radius;
    }
    //너비 가져오는 함수 구현
    TestComp.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return TestComp;
}());
var Ractangle = /** @class */ (function () {
    function Ractangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Ractangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Ractangle;
}());
var shapes = [new TestComp(5), new Ractangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
exports.default = TestComp;
