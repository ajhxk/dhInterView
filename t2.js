var F = function() {};

Object.prototype.a = function() {
    console.log('a');
}

Function.prototype.b = function() {
    console.log('b');
}

var f = new F();

F.a();
F.b();
f.a();
f.b();