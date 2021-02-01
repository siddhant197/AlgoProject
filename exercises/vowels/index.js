// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//=========================Solution 1============================
// function vowels(str){
//     let count = 0;
//     str=str.toLowerCase();
//     for(let i=0; i<str.length; i++){
//         if((/^[aeiou]$/i).test(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

//=========================Solution 2============================
function vowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;