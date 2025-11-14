### Overview

The experiment demonstrates Cantor's diagonalization technique using strings over customizable alphabets. The simulation works with the following principles:

1. It displays a "Purported Bijection Table" showing a mapping from natural numbers to infinite strings
2. You can customize the alphabet size (2-4 symbols), window size (5-15), and window start position (0-50)
3. Each string is infinite in length, but only the first n characters are visible (where n is the window size)
4. Your goal is to construct the diagonalized string that proves no such bijection can exist

### Steps to Perform the Experiment

1. **Access the Controls Panel**
   - Click the settings button (floating button with gear icon) to open the Parameters panel
   - Adjust the following parameters as needed:
     - **Alphabet Size**: Choose between 2-4 symbols (default: 2 for binary {0,1})
     - **Window Size**: Select 5-15 rows to display (default: 10)
     - **Window Start**: Set starting natural number 0-50 (default: 0)

2. **Study the Purported Bijection Table**
   - The table shows natural numbers (n ∈ ℕ) mapped to strings (f(n) ∈ Σ^ω)
   - Each row represents f(n) for natural numbers in your chosen window
   - Position columns (0,1,2,...) show individual characters of each string

3. **Understand the Negation Reference**
   - Below the table, you'll see the alphabet negation mapping
   - For binary: 0 → 1, 1 → 0
   - For larger alphabets: each symbol maps to the next one cyclically

4. **Construct the Diagonalized String**
   - Identify the diagonal elements: position i in row i
   - For each diagonal element, apply the negation mapping
   - The diagonalized string differs from every row at its diagonal position

5. **Enter Your Answer**
   - Type the complete diagonalized string in the input field
   - The string must be exactly the same length as the window size
   - Use only valid alphabet characters

6. **Verify Your Solution**
   - Click the "Check Answer" button
   - The system will validate your answer and provide feedback
   - Upon correct answer, a new table will be automatically generated after 2 seconds

### Example Walkthrough

1. **Parameter Setup**:
   - Set Alphabet Size to 2 (binary: {0, 1})
   - Set Window Size to 6
   - Set Window Start to 0

2. **Generated Table Example**:

   ```text
   n ∈ ℕ | f(n) ∈ Σ^ω | Position | 0 | 1 | 2 | 3 | 4 | 5 |
   ------|------------|----------|---|---|---|---|---|---|
   0     | 101010     | 0        | 1 | 0 | 1 | 0 | 1 | 0 |
   1     | 010101     | 1        | 0 | 1 | 0 | 1 | 0 | 1 |
   2     | 110011     | 2        | 1 | 1 | 0 | 0 | 1 | 1 |
   3     | 001100     | 3        | 0 | 0 | 1 | 1 | 0 | 0 |
   4     | 111000     | 4        | 1 | 1 | 1 | 0 | 0 | 0 |
   5     | 000111     | 5        | 0 | 0 | 0 | 1 | 1 | 1 |
   ```

3. **Diagonal Construction Process**:
   - Position 0: Take diagonal element f(0)\[0\] = 1, negate to get 0
   - Position 1: Take diagonal element f(1)\[1\] = 1, negate to get 0
   - Position 2: Take diagonal element f(2)\[2\] = 0, negate to get 1
   - Position 3: Take diagonal element f(3)\[3\] = 1, negate to get 0
   - Position 4: Take diagonal element f(4)\[4\] = 0, negate to get 1
   - Position 5: Take diagonal element f(5)\[5\] = 1, negate to get 0
   - **Final diagonalized string: 001010**

4. **Result Verification**:
   - Enter the string "001010" in the input field
   - Click "Check Answer"
   - You will receive feedback: "Correct! '001010' is the diagonalized string..."
   - A new table will be generated automatically for the next challenge

