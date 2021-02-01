// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//=========================Solution 1============================
// function anagrams(str1, str2){
//     let obj1 = {};
//     let obj2 = {};
//     for(let char of str1){
//         char = char.toLowerCase();
//         if(char.match(/[a-zA-Z]/)){
//             obj1[char] = (obj1[char] || 0)+1;
//         }
//     }
//     for(let char of str2){
//         char = char.toLowerCase();
//         if(char.match(/[a-zA-Z]/)){
//             obj2[char] = (obj2[char] || 0)+1;
//         }
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for(let key in obj1){
//         if(obj1[key]!==obj2[key]){
//             return false;
//         }
//     }
//     return true;
// }

//=========================Solution 2============================
function anagrams(str1, str2){
    return cleanString(str1) === cleanString(str2);
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;