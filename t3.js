var obj = {};

function Animal(name) {
    this.name = name;
}

var a = Animal.bind(obj);
a(1);
console.log(obj.name);

var b = new a(2);
console.log(obj.name);
console.log(b.name);



(function() {
    window.a = 0;
    var a = 0;

    function t() {
        console.log(this.a);
    }

    var module = {
        a: 1,
        t1: t,
        t2: function() {

        }
    }

    module.t1();
})();