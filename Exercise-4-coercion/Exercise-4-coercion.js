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
var nameTrue = ("Paulo");
var nameFalse = (123);
function isValidName(name){
    if (typeof name != 'string'){
        return false
    }
    else if(name.length == 0) {
        return false
    }
    else if (name.replace(/\s/g, '').length != 0) {
        return false
    }
    else{
        return true
    }
}

isValidName(nameTrue); // Should return true
//isValidName(nameFalse); // Should return false



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

// hoursAttended("12.3", "12"); // should return false;
hoursAttended("14","7"); // should return true;