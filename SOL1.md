Problem Statement:
To test the new 'wc' functionality that counts the top 5 most frequent words in a text file

a. Test Cases for 'top-5' Functionality:

1. Basic Test Case:
   Input: "This is a simple test. This is a simple test."
   Expected Output:
   - lines = 2
   - words = 8
   - top-5 = 'is' (2), 'this' (2), 'a' (2), 'simple' (2), 'test' (2)

2. Test Case with Punctuation and Mixed Case:
   Input: "This is a test! Is this a TEST?"
   Expected Output:
   - lines = 1
   - words = 7
   - top-5 = 'is' (2), 'this' (2), 'a' (2), 'test' (1), 'test!' (1)

3. Test Case with Numbers:
   Input: "123 456 123 789 123 456"
   Expected Output:
   - lines = 1
   - words = 6
   - top-5 = '123' (3), '456' (2), '789' (1)

4. Empty File Test Case:
   Input: ""
   Expected Output:
   - lines = 0
   - words = 0
   - top-5 = (no words)

5. Test Case with Only One Word:
   Input: "apple"
   Expected Output:
   - lines = 1
   - words = 1
   - top-5 = 'apple' (1)

6. Test Case with Less Than 5 Words:
   Input: "one two two three three three four four four four"
   Expected Output:
   - lines = 1
   - words = 12
   - top-5 = 'one' (1), 'two' (2), 'three' (3), 'four' (4)

7. Test Case with Multiline Input:
   Input:
   "This is the first line.\n"
   "This is the second line.\n"
   "This is the third line."
   Expected Output:
   - lines = 3
   - words = 12
   - top-5 = 'is' (3), 'this' (3), 'the' (3), 'first' (1), 'second' (1)

b. Assumptions and Missing Information:

- Assuming "this" and "This" are counted as the same word.
- It's assumed that the tool should exclude common stop words (e.g., "the," "and," "is") from the frequency count. If this is not the case, then common words will dominate the frequency list.
- The test cases assume that words are separated by spaces and punctuation marks are treated as part of the word.
- Splitting on whitespace, considering hyphenated words as one word, etc.