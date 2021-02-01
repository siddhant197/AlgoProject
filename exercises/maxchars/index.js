// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
    var obj = {};
    var max = 0;
    var maxChar = "";
    for(var char of str){
        obj[char] = (obj[char] || 0) + 1;
    }
    // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a:b);

    for(var c in obj){
        if(obj[c] > max){
            max = obj[c];
            maxChar = c;
        }
    }
    return maxChar;
}

module.exports = maxChar;