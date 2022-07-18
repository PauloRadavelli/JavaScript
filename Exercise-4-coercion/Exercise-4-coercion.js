var nameTrue = String("Paulo");
var nameFalse = String("ab");
function isValidName(name){
    if(name.length == 0) {

        return false
    }
    if (name.length < 3) {
        return false
    }
    else{
        return true
    }
}

 isValidName(nameTrue); // Should return true
//isValidName(nameFalse); // Should return false
