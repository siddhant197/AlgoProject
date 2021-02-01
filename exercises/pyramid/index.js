// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//=========================Solution 1============================
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

//=========================Solution 2============================
function pyramid(n, row=0, stair=''){
    if(n===row){
        return;
    }
    if(2*n-1===stair.length){
        console.log(stair);
        return pyramid(n, row+1)
    }

    const mid=Math.floor((2*n-1)/2);
    let add;

    if(mid-row<=stair.length && stair.length<=mid+row){
        add='#';
    }else{
        add=' ';
    }
    pyramid(n, row, stair+add);
}

module.exports = pyramid;