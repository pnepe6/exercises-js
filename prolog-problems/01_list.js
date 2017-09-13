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

console.log('#1.09-duplicate-list-to-sub-list: \n', subList(toSubList)); // return [ [ 'a', 'a', 'a', 'a' ], [ 'b' ], [ 'c', 'c' ], [ 'a', 'a' ], [ 'd' ], [ 'e', 'e', 'e', 'e' ] ]