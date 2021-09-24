CS 262 - lab 4 9/24/2021 Brian Langejans

This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html

Answers:

1. The Screen and Navigator properties allow for multiple screens. The Navigator
contains multiple screen objects as children to define the navigation of the routes.

2. The navigate() function is called on the navigate prop, with the route name of the page you want to move to,
which is similar to URLs

3. The arrow function allows for shorter function syntax, so the navigation.navigate('Details')
function must still need to be defined at that point. Otherwise it does not yet exist as a 
callable function.

4. A list of movies was created within the HomeScreen with each movie being an item.
The navigation.navigate function is called that goes to the details screen, with an extra parameter "item"
that provides what item has been clicked and needs to be shown on the details screen.

5. Once the details screen receives the item/movie parameter, it is able to call route.params.title or 
any other information it needs from that parameter that was passed in the navigation.navigate() function.

