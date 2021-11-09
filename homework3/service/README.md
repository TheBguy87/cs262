
 CS 262 - Homework 3 11/8/2021 Brian Langejans

This homework is based on https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html

Answers
a. 
https://arcane-gorge-41470.herokuapp.com/players
https://arcane-gorge-41470.herokuapp.com/players/1
https://arcane-gorge-41470.herokuapp.com/players/-1
https://arcane-gorge-41470.herokuapp.com/blob
New Join query:
https://arcane-gorge-41470.herokuapp.com/playerscores

b. all of the working endpoints would be considered idempotent since they are all GET requests, and making multiple of the same request will not impact anything. They are also nullipotent since they
   do not have any side effects to the database at all.
c. This would be RESTful since it has a client-server architecture, it is stateless (client state is not stored), and has a uniform interface. 
d. There is some evidence of an impedance mismatch, mostly because there is an object-oriented code base interacting with a relational database.