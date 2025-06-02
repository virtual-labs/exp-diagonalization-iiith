### Set Theory and Diagonalization

### Introduction to Sets

A set is a collection of distinct elements where the number of elements may or may not be finite. These elements can be numbers, letters, symbols, or even other sets. 

**Example:**  
$ A = \{1, 2, 3, 4, 5\} $ is a set with five elements.

### Types of Sets

#### Countable Sets

A *countable set* is one that has either:
- A finite number of elements, or
- All its elements can be mapped bijectively to the elements of the set of natural numbers (for infinite sets)

#### Uncountable Sets

There exist some sets that are infinite and have no bijection with the set of natural numbers. Such sets are called *uncountable sets* and are Turing undecidable. 

**Example:** The set of all real numbers is uncountable.

### Functions and Their Properties

#### Surjective Functions

A function $ f: A \rightarrow B $ is *surjective* (or onto) if:
- Every element in set $ B $ has a corresponding element in set $ A $
- The range of the function $ f $ covers all elements in set $ B $

**Example:**  
Consider $ f(x) = x^2 $ where $ f: A \rightarrow B $ with:
- $ A = \{-1, 1, 2, 3\} $
- $ B = \{1, 4, 9\} $
Here, $ f(x) $ is a surjective function.

#### Injective Functions

A function $ f: A \rightarrow B $ is *injective* (or one-to-one) if:
- Each element in set $ A $ maps to a unique element in set $ B $
- No two distinct elements in set $ A $ are mapped to the same element in set $ B $

**Example:**  
Consider $ f(x) = x^2 $ where $ f: A \rightarrow B $ with:
- $ A = \{1, 2, 3\} $
- $ B = \{1, 2, 4, 5, 9\} $
Here, $ f(x) $ is an injective function.

#### Bijective Functions

A function that is both injective and surjective is called a *bijective function*. A permutation is an example of a bijective function.

### Bijection with Natural Numbers

#### Example: Linear Function
Consider the function $ f(x) = cx $ where:
- $ x $ belongs to the natural numbers
- $ c $ is a constant

This function provides a unique number for every unique $ x $. Even though $ f(x) $ may appear to be a proper subset of $ x $ when $ c $ is positive, there exists a unique $ f(x) $ for any $ x $, proving that the size of the sets must be the same.

**Example:** When $ c = 2 $, we get the set of all even numbers, demonstrating a bijection between natural numbers and even numbers.

#### Examples of Countable Sets
- Set of all natural numbers
- Set of all even numbers
- Set of all odd numbers
- Set of all integers

### Cantor's Diagonalization Method

To determine if a given set is countable or not, we use the *diagonalization method* proposed by Georg Cantor. 

#### Example: Binary Numbers
1. Consider the set of all binary numbers
2. Any binary number can be preceded by an infinite number of $ 0 $s
3. The set can be written as a set of infinite number of infinitely long binary strings
4. Arrange them in a numbered list starting from $ 1 $
5. Take a binary string $ s $
6. Set the $ i $th bit of $ s $ to be the complement of $ i $th bit of the $ i $th binary string in the list
7. This creates a binary string $ s $ which differs from every possible binary string by at least one bit

**Conclusion:** This contradiction proves that our list (attempted bijection with natural numbers) did not contain all the binary numbers, thus proving that binary numbers are uncountable.