/**
 * @param {string} s
 * @return {number} num
 */
// var romanToInt = function(s) {
    
// };

//AI Solution SOLVED
// function romanToInt(s) {
//     let romanToIntMap = new Map();
//     romanToIntMap.set('I', 1);
//     romanToIntMap.set('V', 5);
//     romanToIntMap.set('X', 10);
//     romanToIntMap.set('L', 50);
//     romanToIntMap.set('C', 100);
//     romanToIntMap.set('D', 500);
//     romanToIntMap.set('M', 1000);

//     let num = 0;
//     for (let i = 0; i < s.length; i++) {
//         let current = romanToIntMap.get(s.charAt(i));
//         let next = romanToIntMap.get(s.charAt(i + 1));
//         if (next) {
//             if (current >= next) {
//                 num += current;
//             } else {
//                 num -= current;
//             }
//         } else {
//             num += current;
//         }
//     }
//     return num;
// }

//Dec Solution SOLVED
function romanToInt(s) {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romans[s[i]];
        const next = romans[s[i+1]];
        if (next) {
            if (current < next) {
                num -= current;
            } else {
                num += current;
            }
        } else {
            num += current
        }
    }
    return num;
}
console.log(romanToInt('III'));  //3
console.log(romanToInt('LVIII'));  //58
console.log(romanToInt('MCMXCIV'));  //1994