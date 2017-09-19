/* Exercice 1 - https://sites.google.com/site/prologsite/prolog-problems/1

A list is either empty or it is composed of a first element (head) and a tail, which is a list itself. In Prolog we represent the empty list by the atom [] and a non-empty list by a term [H|T] where H denotes the head and T denotes the tail.

1.01 (*) Find the last element of a list.
	Example:
	?- my_last(X,[a,b,c,d]).
	X = d
*/

var list1 = ['a', 'b', 'c', 'd'];
var l1 = list1.length;

console.log('#1.01-last-element: ', list1[l1-1]); // return last element

/*
1.02 (*) Find the last but one element of a list.
(de: zweitletztes Element, fr: avant-dernier élément)
*/
var list2 = ['a', 'b', 'c', 'd'];
var l2 = list2.length;

console.log('#1.02-last-but-one-element: ', list2[l2-2]); // return last but one element

/*
1.03 (*) Find the K'th element of a list.
The first element in the list is number 1.
Example:
?- element_at(X,[a,b,c,d,e],3).
X = c
*/

var list3 = ['a', 'b', 'c', 'd', 'e'];
var l3 = list3.length;

console.log('#1.03-k-element: ', list3[(l3-1)/2]); // return K element

/*
1.04 (*) Find the number of elements of a list.
*/

var list4 = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('#1.04-list-length: ', list4.length); // return list length

/*
1.05 (*) Reverse a list.
*/

var list5 = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('#1.05-list-reversed: ', list5.reverse()); // return list reversed

/*
1.06 (*) Find out whether a list is a palindrome.
A palindrome can be read forward or backward; e.g. [x,a,m,a,x].
*/

var listPalindromeOdd = ['k', 'a', 'y', 'a', 'k'];
var listPalindromeEven = ['x', 'a', 'm', 'm', 'a', 'x'];
var listNotPalindrome = ['f', 'd', 'm', '5', 'a', 'x'];

function isPalindrome(list) {
	for (var i = 0; i < list.length / 2; i++) {
		var reversedPos = list[list.length - (i + 1)];
		if(reversedPos === list[i]) {
			return true
		}
	}
	return false
} 

console.log('#1.06-is-palindrome-odd-list: ', isPalindrome(listPalindromeOdd)); // return true
console.log('#1.06-is-palindrome-even-list: ', isPalindrome(listPalindromeEven)); // return true
console.log('#1.06-is-palindrome-list: ', isPalindrome(listNotPalindrome)); // return false

/*
1.07 (**) Flatten a nested list structure.
Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).

Example:
?- my_flatten([a, [b, [c, d], e]], X).
X = [a, b, c, d, e]

Hint: Use the predefined predicates is_list/1 and append/3
*/

var flattenNestedList = ['a', ['b', ['c', 'd'], 'e']];


function transformList(nestedList) {
	var list = [];
	var listsTransformer = function(nestedList) {
		for (var i = 0; i < nestedList.length; i++) {
			if(typeof nestedList[i] === 'string'){
				list.push(nestedList[i])
			} else {
				listsTransformer(nestedList[i])
			}
		}	
	}
	listsTransformer(nestedList)
	return list;

}

console.log('#1.07-flatten-nested-list-transformed: ', transformList(flattenNestedList)); // return [ 'a', 'b', 'c', 'd', 'e' ]

/*
1.08 (**) Eliminate consecutive duplicates of list elements.
If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

Example:
?- compress([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [a,b,c,a,d,e]
*/

var duplicateList = ['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'];

function eliminateDuplicate(listDuplicated) {
	var newList = [];
	for (var i = 0; i < listDuplicated.length; i++) {
		while(listDuplicated[i] == listDuplicated[i + 1]) {
			i++;
		}
		newList.push(listDuplicated[i])
	}
	return newList;
}

console.log('#1.08-duplicate-list-eliminated: ', eliminateDuplicate(duplicateList)); // return ['a', 'b', 'c', 'a', 'd', 'e']


/*
1.09 (**) Pack consecutive duplicates of list elements into sublists.
If a list contains repeated elements they should be placed in separate sublists.

Example:
?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

*/
var toSubList = ['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'];

function subList(listDuplicated) {
	var newList = [];
	for (var i = 0; i < listDuplicated.length; i++) {
		var  currentList = []
		currentList.push(listDuplicated[i]);
		while(listDuplicated[i] == listDuplicated[i + 1]) {
			currentList.push(listDuplicated[i]);
			i++;
		}
		newList.push(currentList);
	}
	return newList;
}

var resultSubList = subList(toSubList);

console.log('#1.09-duplicate-list-to-sub-list: \n', resultSubList); // return [ [ 'a', 'a', 'a', 'a' ], [ 'b' ], [ 'c', 'c' ], [ 'a', 'a' ], [ 'd' ], [ 'e', 'e', 'e', 'e' ] ]

/*
1.10 (*) Run-length encoding of a list.
Use the result of problem 1.09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as terms [N,E] where N is the number of duplicates of the element E.

Example:
?- encode([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],[1,b],[2,c],[2,a],[1,d],[4,e]]

*/

var listFromLastExerciceResult = resultSubList;

function runLengthEncoding(subList) {
	function encodeArrayElement(arrayList) {
		var numberElement = arrayList.length;
		var element = arrayList[0];
		var codedArray = [numberElement, element];
		return codedArray;
	}
	return subList.map(encodeArrayElement);
}

var resultEncoding = runLengthEncoding(listFromLastExerciceResult);

console.log('#1.10-result-encoding: ', resultEncoding); // return [[4, 'a'], [1, 'b'], [2, 'c'], [2, 'a'], [1, 'd'], [4, 'e']]

/*
1.11 (*) Modified run-length encoding.
Modify the result of problem 1.10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as [N,E] terms.

Example:
?- encode_modified([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],b,[2,c],[2,a],d,[4,e]]

*/

var previousResultEncoding = resultEncoding;

function encodeArrayElement(arrayList) {
	if(arrayList[0] == 1) {
		return arrayList[1];
	}
	return arrayList;
}

var resultEncodingLight = previousResultEncoding.map(encodeArrayElement);

console.log('#1.11-result-encoding-light: ', resultEncodingLight); // return [[4, 'a'], 'b', [2, 'c'], [2, 'a'], 'd', [4, 'e']]

/*
1.12 (**) Decode a run-length encoded list.
Given a run-length code list generated as specified in problem 1.11. Construct its uncompressed version.

*/

var toUncompress = resultEncodingLight;

function uncompressList(compressedList) {
	console.log('#### ', typeof compressedList[0] == 'number');

	if(typeof compressedList[0] == 'number') {
		var numberOfCopy = compressedList[0];
		var elementToCopy = compressedList[1]
		var elements = [];
		for(i = 0; i < numberOfCopy; i++) {
			elements.push(elementToCopy);
		}
		return elements;
	} else {
		return [compressedList[0]];
	}

}


var resultUncompressed = toUncompress.map(uncompressList);

console.log('#1.12-result-uncompressed: ', resultUncompressed); // return [ [ 'a', 'a', 'a', 'a' ], [ 'b' ], [ 'c', 'c' ], [ 'a', 'a' ], [ 'd' ], [ 'e', 'e', 'e', 'e' ] ]


/*
1.13 (**) Run-length encoding of a list (direct solution).
Implement the so-called run-length encoding data compression method directly. 
I.e. don't explicitly create the sublists containing the duplicates, as in problem 1.09, 
but only count them. As in problem 1.11, simplify the result list by replacing the singleton terms [1,X] by X.

Example:
?- encode_direct([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],b,[2,c],[2,a],d,[4,e]]


*/

var listToCompress = ['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'];


function subListEncoding(listDuplicated) {
	var newList = [];
	for (var i = 0; i < listDuplicated.length; i++) {
		var  currentList = []
		currentList.push(listDuplicated[i]);
		while(listDuplicated[i] == listDuplicated[i + 1]) {
			currentList.push(listDuplicated[i]);
			i++;
		}
		newList.push(currentList);
	}
	return newList;
}


function runFullEncoding(subList) {
	function encodeArrayElement(arrayList) {
		var numberElement = arrayList.length;
		var element = arrayList[0];
		var codedArray = [numberElement, element];
		if(codedArray[0] == 1) {
			return codedArray[1];
		}
		return codedArray;
	}
	return subList.map(encodeArrayElement);
}

var resultSubListEncoding = subListEncoding(listToCompress);
var resultEncodingFull = runFullEncoding(resultSubListEncoding);

console.log('#1.13-result-encoding-full: ', resultEncodingFull); // return [[4, 'a'], 'b', [2, 'c'], [2, 'a'], 'd', [4, 'e']]

/*
1.14 (*) Duplicate the elements of a list.
Example:
?- dupli([a,b,c,c,d],X).
X = [a,a,b,b,c,c,c,c,d,d]

*/

var listToDuplicate = ['a', 'b', 'c', 'd'];

// function duplicateArrayElement(list, number){

// 	function duplicate(listElement){
// 		var duplicatedArray = [];
// 		console.log('#### listElement ', listElement);
// 		for(i = 0; i < number; i++){
// 			duplicatedArray.push(listElement);
// 		}
// 		console.log('#### duplicatedArray ', duplicatedArray);

// 		return duplicatedArray;
// 	}		

// 	return list.map(duplicate);

// }

function duplicateArrayElement(list, number){

	function duplicate(listElement){
		var duplicatedArray = [];
		for(i = 0; i < number; i++){
			duplicatedArray.push(listElement);
		}
		return duplicatedArray;
	}		

	var resultDuplicate = list.map(duplicate);

	function transformDuplicatedList(nestedList) {
		var list = [];
		var listsDuplicateTransformer = function(nestedList) {
			for (var i = 0; i < nestedList.length; i++) {
				if(typeof nestedList[i] === 'string'){
					list.push(nestedList[i])
				} else {
					listsDuplicateTransformer(nestedList[i])
				}
			}	
		}
		listsDuplicateTransformer(nestedList)
		return list;

	}

	return transformDuplicatedList(resultDuplicate);

}

var resultDuplicateList = duplicateArrayElement(listToDuplicate, 2);

console.log('#1.14-result-duplicate: ', resultDuplicateList); // return ['a', 'a', 'b' ,'b', 'c', 'c', 'd', 'd']
