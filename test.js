var a = /** @class */ (function () {
    function a() {
        this.b = 1;
        this.c = 10;
    }
    a.prototype.x = function (y) {
        if (y === void 0) { y = 1; }
        return y + 1;
    };
    a.prototype.y = function (z) {
        if (z === void 0) { z = 1; }
        return this.x(z);
    };
    return a;
}());
var x = new a();
x.y(2);
