// using Object.is utility
var myIntegerValue = 5;

Object.is(myValue, -5); // "false"
Object.is(myValue, 5); // "true"

// using isNaN utility

var myStringValue = "I'm not a number!";

Number.isNaN(myStringValue); // false;
isNaN(myStringValue); // true, isNan() function converts to a number first.

// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
    Object.is = function ObjectIs(x,y) {
        var xNegativeZero = isItNegativeZero(x);
        var yNegativeZero = isItNegativeZero(y);

        if (xNegativeZero || yNegativeZero) {
            return xNegativeZero && yNegativeZero
        }
        else if (isItNaN(x) && isItNaN(y) ){
            return true;
        }
        else {
            return x === y;
        }

        function isItNaN(v){
            return v !== v;
        }
        function isItNegativeZero(v){
            return v === 0 && (1/v) === -Infinity;
        }

    };
}

// tests, should all return true:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);