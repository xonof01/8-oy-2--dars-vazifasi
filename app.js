//      1 - masala
// function multiplyValues(obj, n) {
//     return Object.keys(obj).reduce((acc, key) => {
//         acc[key] = obj[key] * n;
//         return acc;
//     }, {});
// }
// const obj = { a: 2, b: 3, c: 4 };
// const n = 3;
// const res = multiplyValues(obj, n);
// console.log(res);
//   2- masala
//   function countWordsWithA(str) {
//     let count = 0;
//     const words = str.split(" "); 
//     for (const word of words) {
//         if (word.toLowerCase().includes("a")) { 
//             count++;
//         }
//     }
//     return count;
// }
// const text = "Apple and bananas are amazing";
// const result = countWordsWithA(text);
// console.log(result);
//  3- masala
// function printBookStatus(books) {
//     books.forEach(book => {
//         const status = book.read ? "o'qilgan" : "o'qilmagan";
//         console.log(
//             `${book.author} ning "${book.title}" kitobi ${status}`
//         );
//     });
// }
// const books = [
//     { title: "Halqa", author: "Akrom Malik", read: false },
//     { title: "Dunyoning ishlari", author: "O’tkir Hoshimov", read: true },
//     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true },
// ];
// printBookStatus(books);
// 4- masala
// function createObjectFromArray(arr) {
//     return arr.reduce((acc, item) => {
//         acc[item] = item.length; 
//         return acc;
//     }, {});
// }
// const input = ["text", "world", "laptop"];
// const output = createObjectFromArray(input);
// console.log(output);
// 5- masala
// function countWords(arr) {
//     const map = new Map();
//     for (const word of arr) {
//         map.set(word, (map.get(word) || 0) + 1);
//     }
//     return Object.fromEntries(map);
// }
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const output = countWords(animals);
// console.log(output); 
// 6- masala
// function ageDifference(people) {
//     let minAge = Infinity;
//     let maxAge = -Infinity;
//     for (const person of people) {
//         if (person.age < minAge) minAge = person.age;
//         if (person.age > maxAge) maxAge = person.age; 
//     }
//     return maxAge - minAge;}
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 },
// ];
// const output = ageDifference(people);
// console.log(output); 
// 8- masala
// function minMaxWord(sentence) {
//     const words = sentence.split(" ");
//     let minWord = words[0];
//     let maxWord = words[0];
//     for (const word of words) {
//         if (word.length < minWord.length) minWord = word;
//         if (word.length > maxWord.length) maxWord = word;
//     }
//     return { minWord, maxWord };
// }
// const input = "Men dasturlash kursida o’qiyman";
// const result = minMaxWord(input);
// console.log(result);
// 9- masala
// function extractMessage(str) {
//     const najot = str.match(/NAJOT/i)[0];
//     const talim = str.match(/ta'lim/)[0];
//     const is = str.match(/is/)[0];
//     const the = str.match(/the/)[0];
//     const best = str.match(/best/)[0];
//     return `${najot} ${talim} ${is} ${the} ${best}`;
// }
// const input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// const result = extractMessage(input);
// console.log(result); 
// 13- masala
// const input = {a: 2, b: 5, c: 7};

// const result = Object.keys(input).map(key => key + input[key]);
// console.log(result); 

// 14-masala
// var findMedianSortedArrays = function(nums1, nums2) {
//     let i = 0, j = 0;
//     const merged = [];
//     while (i < nums1.length || j < nums2.length) {
//         if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
//             merged.push(nums1[i]);
//             i++;
//         } else {
//             merged.push(nums2[j]);
//             j++;
//         }
//     }
//     const mid = Math.floor(merged.length / 2);
    
//     if (merged.length % 2 === 0) {
//         return (merged[mid - 1] + merged[mid]) / 2;
//     } else {
//         return merged[mid];
//     }
// };
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const result = findMedianSortedArrays(nums1, nums2);
// console.log(result);

