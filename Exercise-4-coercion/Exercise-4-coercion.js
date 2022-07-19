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
    attended = Number(attended);
    length = Number(length);
    if (typeof attended != 'string' && typeof attended != 'number'){
        console.log(1)
        return false
    }
    else if (typeof length != 'string' && typeof length != 'number'){
        console.log(2)

        return false
    }
    else if (attended < 0 || length < 0) {
        console.log(3)

        return false
    }
    else if (!Number.isInteger(attended) || !Number.isInteger(length)){
        console.log(4)

        return false
    }
    else return true
}