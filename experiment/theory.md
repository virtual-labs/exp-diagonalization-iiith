### Theory

# Sets

A set is a collection of distinct elements where the number of elements may or may not be finite. Theese elements can be numbers, letters, symbols or even other sets. 

## Countable Sets

A countable set is one that has finite number of elements or all its elements can be mapped bijectively to the elements of the set of natural numbers if the set has infinitely many items.

# Surjective Function

A function $f:A\rightarrow B$ is surjective (or onto) if every element in set $B$ has a corresponding element in set $A$ such that the function maps to it or the range of the function $f$ covers all elements in set $B$.

# Injective Function

A function $f:A\rightarrow B$ is injective (or one-to-one) if each element in set $A$ maps to a unique element in set $B$. In other words, no two distinct elements in set $A$ are mapped to the same element in set $B$.

# Bijective Function

A function that is both injective and surjective at the same time is called a bijective function.

# Bijection of the fucntion $f(x)=cx$ and natural numbers
An example of bijection between the natural numbers and a countable set can be seen in $f(x)=cx$ where $x$ belongs to the natural numbers, $c$ represents a constant and thus $f(x)$ provides a unique number for every unique $x$. since $f(x)$ may not have all the numbers from $x$, it could appear to be smaller as being a proper subset of $x$ if $c$ is positive. But, there exists a unique $f(x)$ for any $x$ possible, thus the size of $x$ and $f(x)$ must be same. This can be observed in the set of all even numbers where $c=2$ in 

example of set of even numbers

Some examples of countable sets are
- set of all natural number
- set of all even numbers
- set of all odd numbers
- set of all integers

# Uncountabile Sets

There exist some sets that are infinite and also have no bijection with the set of natural numbers. Such sets are called uncountable sets and are turing undecideable. One example of such a set would be the set of all real numbers.

# diagonlaization

To find out if any given set if countable or not, we use the diagonalization method proposed by Georg Cantor. We take the case of the set of all binary numbers. Any binary number can be preceded by infinite number of $0$. Thus the set of all binary numbers can be written as a set of infinte number of infinitely long binary strings. Take the infinitely large set of infinitely long binary strings and arrange them in as a numbered list starting from $1$. Take a binary string $s$. Set the $i$th bit of of $s$ to be the complement of $i$th bit of $i$ binary string in the list. Doing this for all values of $i$, we get a binary string $s$ which is dissimilar to every possible binary string by at least one bit. This shouldn't be possible since our list contained all possible binary strings, this contradiction proves that our list (attempted bijection with natural numbers) did not contain all the binary numbers and thus proving that binary numbers are uncountable.