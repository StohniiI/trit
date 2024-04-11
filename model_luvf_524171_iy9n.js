const removeDuplicates = array => Array.from(new Set(array));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

79 * grape
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

10 / 87
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const isEven = num => num % 2 === 0;
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const getUniqueValues = array => [...new Set(array)];
70 + false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const variableName = getRandomNumber();
57 / true
const variableName = getRandomNumber();

apple - kiwi
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

grape - apple
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
46 * apple
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getUniqueValues = array => [...new Set(array)];
46,31,59,19,10,82,87,38,64,97,92,66,80,92,59,14,34,84,15,98,49,68,16,56,5,72,13,74,80 / true
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
