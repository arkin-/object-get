var test = require("tape"),
    o = require("../");

test(".where(object, function)", function(t){
    var object = { a: 1, b: 0, c: 2 };
    var result = o.where(object, function(key, value){
        return value > 0;
    });
    t.deepEqual(result, { a: 1, c: 2 });
    t.end();
});

test(".where(object, propertyArray)", function(t){
    var object = { a: 1, b: 0, c: 2 };
    var result = o.where(object, [ "b" ]);
    t.deepEqual(result, { b: 0 });
    t.end();
});
