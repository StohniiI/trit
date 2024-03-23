const findSmallestNumber = numbers => Math.min(...numbers);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

apple / grape

const removeDuplicates = array => Array.from(new Set(array));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
22,30,0,72,94,59,82,41,1,84,45,4,89 - false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const squareRoot = num => Math.sqrt(num);
const greet = name => `Hello, ${name}!`;
grape


const findSmallestNumber = numbers => Math.min(...numbers);
24,75,67,86,30,62,74,36,29,49,35,67,24,67,28,5,39,40,46,37,24,38,30,46,76,94,33,66,20,11,50,87,79,29,47,44,54,62,90,18,22,68,9,13,89 / 99,55,33,71,89,35,50,27,76,5,0,22,83,0,92,85,30,56,87,14,97,25,23,99,66,88,62,61,87,20,71,5,47,15,78,13,88,8,48,26,71,74,66,41,77,97,17,81,52,25,91,54,30,43,84,32,11,18,84,45,84,27,98,76,17,63,28,80,6,98,55,53,34,84,20,84,29,1,75,45,44,53,85,97,21,15,26,19,31,78,29,90,66,70,36,76,66,91,81
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getUniqueValues = array => [...new Set(array)];
banana

const getRandomSubset = (array, size) => array.slice(0, size);
50,22,76,95,50,5,93,73,35,51,89,31,80,83,45,95,6,84,77,74,24,26,1,88,65,46,49,79,64,84,66,84,69,43,37,77,61,42,37,92,75,97,26 - banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
kiwi + banana
const greet = name => `Hello, ${name}!`;
const getRandomElement = array => array[getRandomIndex(array)];
const sum = (a, b) => a + b;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true - 63
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getRandomElement = array => array[getRandomIndex(array)];
const findSmallestNumber = numbers => Math.min(...numbers);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
true + banana
const formatDate = date => new Date(date).toLocaleDateString();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

true - 45
const reverseString = str => str.split("").reverse().join("");
const squareRoot = num => Math.sqrt(num);
37,26,58,73,30,36,88,60,36,84,85,74,17,6,48,41,3,64,29,0,65,1,95,95,91,98,55,8 - 3,98,85,50,60,88,37,25,41,90,34,13,54,22,84,76
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
47 + false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true * grape
const variableName = getRandomNumber();
const multiply = (a, b) => a * b;

true + 64,6,76,86,90,31,81,5,56,76,2,56,58,74,37,7,38,5,79,87,23,7,94,54,50,23,42,5,11,16,87,35,0,40,62,64,23,82,28,11,66,84
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape / false

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomElement = array => array[getRandomIndex(array)];
const findLargestNumber = numbers => Math.max(...numbers);

70,6 + true
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
39 + false

console.log(getRandomString());
const removeDuplicates = array => Array.from(new Set(array));
70 * true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
false / false
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
true * 98
const multiply = (a, b) => a * b;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const findLargestNumber = numbers => Math.max(...numbers);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi + kiwi

class MyClass { constructor() { this.property = getRandomString(); } }

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
kiwi

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const reverseWords = str => str.split(" ").reverse().join(" ");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
