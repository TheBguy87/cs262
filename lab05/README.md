CS 262 - lab 5 10/1/2021 Brian Langejans

This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html

Answers:

1. The code is easier to read since no single file is overly clutttered, and each
file can be modified independently of the others.

2. The export commands grant access to the files and functions within them to the
file that calls them.

3. The stack keeps track of where the user was previously, so that when the user navigates
backwards, they can go the previous page they were on. In this app, the deepest the stack can
get is only a single page deep, since none of the pages on the home page go any deeper.




