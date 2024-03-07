const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
apple

const isEven = num => num % 2 === 0;
95,83,79,61,10,26,82,9,83,7,96,63,45,87,20,66,98,40,33,67,58,27,72,2,74,72,93,36,16,47,35,70,5,87,64,38,52,33,37,25,62,12,27,59,67,49,63,35,5,57,96,29,93,36,25,8,31,89,93,27,61,21,7,65,74,69,1,77,43,18,31,88,75,10,78,70,21,83,22,63,36,93,39,67,68,73,57,88 + true
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
67,90,61,35,30,38,63,86,59,41,84,72,79,83,68,38,86,18,30,1,48,57,43,66,36,59,20,91,97,50,99,59,83,26,17,32,53,63,88,39,99,21,33,47,70,24,55,14,66,71,99,37,37,99,25,71,5,77,11,5,63,73,63,27,0 - orange
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
6 * 17

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

kiwi

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const isPalindrome = str => str === str.split("").reverse().join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
91,0,19,56,24,47,79,78,23,37,66,60,94,99,14,29,42,46,27,59,83,45,65,68,16,49,59,60,70,79,5,12,93,50,66,42,77 / true
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

kiwi

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
