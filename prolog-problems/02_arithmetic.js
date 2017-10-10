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
    var factorList = [];

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
    const deepIndexOf = (list, searchElement) => {
	    for ( let i = 0; i < list.length; i++ ) {
	        if ( list[i][0] == searchElement[0] && list[i][1] == searchElement[1] ) {
	            return i;
	        }
	    }
	    return -1;
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

console.log('#2.03-get-factor-with-multiple of: ' + JSON.stringify(primeHighNumber) + ' = ', getFactorWithMultiple(primeHighNumber)); // return [3, 3, 5, 7]
