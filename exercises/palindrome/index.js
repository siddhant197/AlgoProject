//Give a string, return true is the string is a palindrome and false if not
//--Examples--
//palindrome('abba') === true
//palindrome('hello') === false

//=========================Solution 1============================
function palindrome(str){
    var rev = str.split('').reverse().join('');
    return str === rev;
}

module.exports = palindrome;