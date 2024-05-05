//Task 1
function upperCase(str){
    var symbol = /[A-Z]/;
    if(symbol.test(str[0])){
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character"
    }
}
console.log(upperCase('regexp')); //without uppercase
console.log(upperCase('RegExp')); //with uppercase


//Task 2
function checkEmail(email){
    var pattern = /^.*@[a-z]+.[a-z]+$/;

    if(pattern.test(email)){
        return true;
    } else {
        return false;
    }
} 
console.log(checkEmail('Qmail2@gmail.com')); //true
console.log(checkEmail('justline')); //false


//Task 3
function findPattern(str){
    var pattern = /db+d/gi;
    var arr = str.match(pattern);

    arr.push(arr[0].match(/b+/i).toString());
    arr.push(arr[0].match(/d$/i).toString());

    return arr;
} 
console.log(findPattern('cdbBDbsbz')); //[ 'dbBD', 'bB', 'D' ]


//Task 4
function changePlacement(str){
    var pattern = /\s/;
    var arr = str.split(pattern).reverse();
    
    return arr.join(", ");
} 
console.log(changePlacement("Java Script")); //"Script, Java"


//Task 5
function validateCard(str){
    var pattern = /([0-9]{4}-?){4}/;

    if(pattern.test(str)){
        return "This string is a valid card number";
    } else {
        return "This string is not a valid card number";
    }
} 

console.log(validateCard("9999-9999-9999-9999")); //valid
console.log(validateCard("9ap9-99-0101-9999")); //not valid


//Task 6
function validateEmail(email){
    var pattern = /^[A-Za-z0-9][A-Za-z0-9_]+-?[A-Za-z0-9_]+@[a-z]+.[a-z]+$/;

    if(pattern.test(email)){
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
} 

console.log(validateEmail("my_mail@gmail.com")); //correct
console.log(validateEmail("#my_mail@gmail.com")); //incorrect
console.log(validateEmail("my_ma--il@gmail.com")); //incorrect


//Task 7
function checkLogin(login){
    var pattern = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;
    var patternForNum = /[0-9]+.?([0-9]?)+/g;
    var check = null;
    var arr = login.match(patternForNum);

    pattern.test(login)? check = true : check = false;
    return check + "\n" + arr;
} 

console.log(checkLogin('ee21.1ret3')); //true 21.1,3