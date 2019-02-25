var module = (function() {
    var _countObj = {
        value: 1
    };

    function add() {
        _countObj.value++;
    }

    return {
        add: add,
        value: _countObj.value
    }

})();

module.add();
module.add();
console.log(module.value)