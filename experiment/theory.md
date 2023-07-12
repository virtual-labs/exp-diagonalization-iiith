### Theory

# decidability and countability

We wish to find if any given language is turing decidable or not. One way of going about doing that would be finding out if its elements are countable or not. A countable set is one that has finite number of elements or all its elements can be mapped bijectively to the elements of the set of natural numbers.

# Bijection of the fucntion f(x)=cx and natural numbers
An example of bijection between the natural numbers and a countable set can be seen in f(x)=cx where x belongs to the natural numbers, c represents a constant and thus f(x) provides a unique number for every unique x. since f(x) may not have all the numbers from x, it could appear to be smaller as being a proper subset of x if c is positive. But, there exists a unique f(x) for any x possible, thus the size of x and f(x) must be same.

Some examples of countable sets are
- set of all natural number
- set of all even numbers
- set of all odd numbers
- set of all integers
- set of all rational numbers

# uncountability and diagonalization

There exist some sets that are infinite and also have no bijection with the set of natural numbers. Such sets are called uncountable sets and are turing undecideable. One example of such a set would be the set of all real numbers.

# diagonlaization

To find out if any given set if countable or not, we use the diagonalization method proposed by Georg Cantor. We take the example of the set of all binary numbers. We manually create a correspondence between the set of natural numbers and the binary numbers. Let there be an element x whose ith bit is the the complement of the ith bit of f(i), this differing from each f(i) by at least one bits. for binary strings of infinite length, i will cover all the natural numbers and thus x will be different from all binary numbers mapped to natural numbers. Unless x is not binary, which it is in this case, the existence of x as an element different from all the elements mapped to the natural numbers contradicts with our assumption that all of the binary numbers can be mapped to natural numbers. This contradiction proves that the set of binary numbers is not countable.


