//import test from "node:test";
//import assert from "node:assert";
const test = require("node:test");
const assert = require("node:assert");

test("examples", (t) => {
    assert.equal(1, 0 , "1 is not equal to 0");
    t.end();
});

test("example object test ",  (t) => {
    assert.deepEqual({a: 1}, {a: 1}, "objects are not equal");

});


