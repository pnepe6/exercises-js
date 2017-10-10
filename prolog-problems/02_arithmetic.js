'use strict';
// Started tuesday 10/10/2017 from https://sites.google.com/site/prologsite/prolog-problems/2
// list used in exercices

const primeNumber = 7;
const composeNumber = 6;
const primeHighNumber = 315;

/*
2.01 (**) Determine whether a given integer number is prime.
Example:
?- is_prime(7).
Yes
*/

const isPrime = (number) => {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

console.log('#2.01-is-prime-number: ' + JSON.stringify(primeNumber) + ' = ', isPrime(primeNumber)); // return true
console.log('#2.01-is-prime-number: ' + JSON.stringify(composeNumber) + ' = ', isPrime(composeNumber)); // return false

/* 
2.02 (**) Determine the prime factors of a given positive integer.
Construct a flat list containing the prime factors in ascending order.
Example:
?- prime_factors(315, L).
L = [3,3,5,7]
*/

const getFactor = (number) => {
    var factorList = [];

    for (let i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factorList.push(i);
            number /= i;
        }
    }

    return factorList;
}


console.log('#2.02-get-factor: ' + JSON.stringify(primeHighNumber) + ' = ', getFactor(primeHighNumber)); // return [3, 3, 5, 7]
console.log('#2.02-get-factor: ' + JSON.stringify(primeNumber) + ' = ', getFactor(primeNumber)); // return [7]
