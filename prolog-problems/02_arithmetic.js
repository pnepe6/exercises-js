'use strict';
// Started tuesday 10/10/2017 from https://sites.google.com/site/prologsite/prolog-problems/2
// list used in exercices

const primeNumber = 7;
const composeNumber = 6;
const primeHighNumber = 315;
const primeNumberMin = 310;
const primeNumberMax = 315;

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

console.log('#2.01-is-prime-number of: ' + JSON.stringify(primeNumber) + ' = ', isPrime(primeNumber)); // return true
console.log('#2.01-is-prime-number of: ' + JSON.stringify(composeNumber) + ' = ', isPrime(composeNumber)); // return false

/* 
2.02 (**) Determine the prime factors of a given positive integer.
Construct a flat list containing the prime factors in ascending order.
Example:
?- prime_factors(315, L).
L = [3,3,5,7]
*/

const getFactor = (number) => {
    let factorList = [];

    for (let i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factorList.push(i);
            number /= i;
        }
    }

    return factorList;
}


console.log('#2.02-get-factor of: ' + JSON.stringify(primeHighNumber) + ' = ', getFactor(primeHighNumber)); // return [3, 3, 5, 7]
console.log('#2.02-get-factor of: ' + JSON.stringify(primeNumber) + ' = ', getFactor(primeNumber)); // return [7]

/* 
2.03 (**) Determine the prime factors of a given positive integer (2).
Construct a list containing the prime factors and their multiplicity.
Example:
?- prime_factors_mult(315, L).
L = [[3,2],[5,1],[7,1]]

Hint: The solution of problem 1.10 may be helpful.
*/

const getFactorWithMultiple = (number) => {
    let factorList = [];
    let result = [];

    for (let i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factorList.push(i);
            number /= i;
        }
    }
	for(let i = 0; i < factorList.length; i += 1) {

		let numberElement = 1;
		let element = factorList[i];

		if (factorList[i + 1] == factorList[i]) {
	        numberElement += 1;
	        result.push([element, numberElement]);
	        i += 1;
	    }
	    if(deepIndexOf(result, [element, numberElement]) === -1) {
	    	result.push([element, numberElement]);
	    }
	}
	return result;
}

const deepIndexOf = (list, searchElement) => {
    for ( let i = 0; i < list.length; i++ ) {
        if ( list[i][0] == searchElement[0] && list[i][1] == searchElement[1] ) {
            return i;
        }
    }
    return -1;
}

console.log('#2.03-get-factor-with-multiple of: ' + JSON.stringify(primeHighNumber) + ' = ', getFactorWithMultiple(314)); // 315 =  [ [ 2, 1 ], [ 157, 1 ] ]

/* 
2.04 (*) A list of prime numbers.
Given a range of integers by its lower and upper limit, construct a list 
of all prime numbers in that range.

Personal example:
?- prime_factors_mult(314, 315, L).
L = [ [[2, 1], [ 157, 1 ]], [[3,2],[5,1],[7,1]] ]

*/

const getPrimeNumberBetween = (min, max) => {
	let range = [];
	let posEnd = max + 1;
    let result = [];

	for(let i = min; i < posEnd; i++) {
		range.push(i);
	}

	for(let i = 0; i < range.length; i++) {
		let factorList = [];
		for (let j = 2; j <= range[i]; j++) {
	        while ((range[i] % j) === 0) {
	            factorList.push(j);
	            range[i] /= j;
	        }
	    }
	    result.push(factorList);
	}

    return result;
}

console.log('#2.04-get-all-prime-number between: ' + JSON.stringify(primeNumberMin) + ' and ' + JSON.stringify(primeNumberMax) + ' = ', getPrimeNumberBetween(primeNumberMin, primeNumberMax)); // return [ [ 2, 5, 31 ], [ 311 ], [ 2, 2, 2, 3, 13 ], [ 313 ], [ 2, 157 ], [ 3, 3, 5, 7 ] ]

/* 
2.05 (**) Goldbach's conjecture.
Goldbach's conjecture says that every positive even number greater than 2 is the sum 
of two prime numbers. Example: 28 = 5 + 23. It is one of the most famous facts in number 
theory that has not been proved to be correct in the general case. 

It has been numerically confirmed up to very large numbers (much larger than we can go with
 our Prolog system). Write a predicate to find the two prime numbers that sum up to a given 
 even integer.

Example:
?- goldbach(28, L).
L = [5,23]
*/
const goldbachNum = 28;

const getGoldbachConjecture = (number) => {
  let numList =[];
  let result = [];
  let firstResult = [];

  for(let i = 1; i < number; i += 1) {
    if(isPrime(i) === true) {
        numList.push(i);
    }
  }

  for(let i = 0; i < numList.length; i += 1) {
      for(let j = numList.length; j > 1; j -= 1) {
        if(typeof numList[j] === "number"){
            if(((numList[i] + numList[j]) === number) && (result.indexOf(numList[i]) === -1) && (result.indexOf(numList[j]) === -1)) {
                result.push(numList[i]);
                result.push(numList[j]);
            }   
        }

      }
  }
  firstResult = [result[0], result[1]];
  return firstResult;
}

const isPrime = (number) => {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

console.log('#2.05-get-goldbach-conjecture of: ' + JSON.stringify(goldbachNum) + ' = ', getGoldbachConjecture(goldbachNum)); // return [ [ 2, 5, 31 ], [ 311 ], [ 2, 2, 2, 3, 13 ], [ 313 ], [ 2, 157 ], [ 3, 3, 5, 7 ] ]
