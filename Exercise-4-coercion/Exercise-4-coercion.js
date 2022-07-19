/*
    Exercise 4{
        Define an "isValidName(...)" validator that
        takes one parameter, "name". The validator returns "true" 
        if all the following match the parameter ("false" otherwise);

        -must be a string
        -must be non-empty
        -must contain non-whitespace of at least 3 characters
    }
*/

function isValidName(name){
	if (typeof name != 'string' && name.trim().length < 3){
  	return false
  }
  else return true
}

// *********************** TESTS:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

/* 
    Exercise 4.2{
        Define an "hoursAttended(..)" validator that takes two
        parameters, "attended" and "length". The validator
        return "true" if all the following match the two parameters 
        ("false otherwise");

        -eiter parameter may only be a stringo r a number
        -both parameters should be treated as numbers
        -both numbers must be 0 or higher
        -both numbers must be whole numbers
    }
*/
function hoursAttended(attended, length){
    length = Number(length);
    if (typeof attended == 'string' && attended.trim() != ""){
        attended = Number(attended);
    }
    if (typeof length == 'string' && length.trim != ""){
        length = Number(length);
    }
    if (typeof attended == "number" && 
        typeof length == 'number' &&
        attended <= length &&
        attended >= 0 &&
        length >= 0 &&
        Number.isInteger(attended) &&
        Number.isInteger(length)
    ){
        return true;
    }
    return false;
}

// TESTS:
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);