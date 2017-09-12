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
		if(reversedPos !== list[i]) {
			return false
		}
	}
	return true
} 

console.log('#1.06-is-palindrome-odd-list: ', isPalindrome(listPalindromeOdd)); // return true
console.log('#1.06-is-palindrome-even-list: ', isPalindrome(listPalindromeEven)); // return true
console.log('#1.06-is-not-palindrome-list: ', isPalindrome(listNotPalindrome)); // return false

/*
1.07 (**) Flatten a nested list structure.
Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).

Example:
?- my_flatten([a, [b, [c, d], e]], X).
X = [a, b, c, d, e]

Hint: Use the predefined predicates is_list/1 and append/3
*/