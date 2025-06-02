### Overview

The experiment demonstrates Cantor's diagonalization technique using binary numbers. The simulation works with the following principles:

1. It displays n binary strings (where n is your chosen window size)
2. Each string is infinite in length, but only the first n characters are visible
3. The window size (n) can be any integer from 1 to 10
4. Your goal is to find a binary string that differs from all displayed strings

### Steps to Perform the Experiment

1. Choose a Window Size
   - Enter an integer between 1 and 10
   - This determines how many strings you'll see and their visible length

2. Observe the Generated Strings
   - The simulation will display n binary strings
   - Each string will show its first n characters

3. Create Your Different String
   - Use the diagonalization method to construct a new binary string
   - Your string should differ from every displayed string in at least one position

4. Enter Your Answer
   - Input your constructed binary string in the provided answer field

5. Verify Your Solution
   - Click the "Check" button
   - The simulation will tell you if your answer is correct

### Example Walkthrough

1. Input Selection:
   - Enter window size: 6

2. Generated Display:
   ![strings](images/strings.png)

3. String Construction Process:
   - First position: Flip the first bit (1) of first string → Enter 0
   - Second position: Flip the second bit (0) of second string → Enter 1
   - Continue this process along the diagonal
   - Flip each highlighted bit (shown in red)
   - Final constructed string: $ 010101 $

4. Result Verification:
   - Enter the string $ 010101 $
   - Click "Check"
   - You will receive the message "the answer is correct".