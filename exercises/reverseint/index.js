//Give a integer, return an integer that is reverse ordering of numbers
//--Examples--
//reverseint(15) === 51
//reverseint(981) === 189
//reverseint(-90) === -9

//=========================Solution 1============================
function reverseint(num){
    var str = num.toString();
    return parseInt(str.split('').reverse().join(''))*Math.sign(num);
}

module.exports = reverseint;