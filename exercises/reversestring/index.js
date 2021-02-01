//Give a string, return a new string with the reversed order
//--Examples--
//reverse('apple') === 'elppa'
//reverse('hello') === 'olleh'

//=========================Solution 1============================
function reverse(str){
    var newstr = '';
    for(var i=str.length-1; i>=0; i--){
        newstr+=str[i];
    }
    return newstr;
}

//=========================Solution 2============================
// function reverse(str){
//     return str.split('').reverse().join('');   
// }

//=========================Solution 3============================
// function reverse(str){
//     return str.split('').reduce((rev, char) => char+rev, '');
// }

module.exports = reverse;