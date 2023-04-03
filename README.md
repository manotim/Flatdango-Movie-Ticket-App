# Flatdango-Movie-Ticket-App
Flatdango-Movie-Ticket-Application is a simple application that allows you to create a movie ticket using the standard flatdango framework. It helps a user to create a movie ticket from their favourite movie, by picking it from a list of favorite movies.

# DESCRIPTION
Flatdango has many features can use to book a ticket to watch their favorite movie. The user can see the detals of the first movie when they land on the page on load. They can then see the title, description, time length, and tickets available of the movie. If they are interested in the first movie, they can  choose it. If not, they can then proceed  to click the movie of their choice from a  list of available movies listed on the left side of the page. They can then the details of the movie, and buy the ticket of the movie. Once a user buys a ticket of a  movie, the number of tickets available decreases. If all tickets have been obtained, then the user will be shown that the movie tickets have been SOLD OUT. If a user is not interested in the movie, thencan remove it from the page by clicking the delete button attached to the movie.

I used a list of movies stored in the database, which a accessed dynamically to my script file using the fetch method. JSON-server acted as my local server to watch and run the application.
The application uses two functions, one for creating a movie ticket, and one for creating movies list.

The app utilizes communication between the server and the user by accessing movies in the server, and deleting a movie they do not like from the database. 
The application is created using anumber of event listeners. On pae load, the first is automatically loaded. When a  user clicks on the buy ticket button, the number of available tickets by one. When the user clicks on the delete button on movie in the list, the movie gets removed from the page.

During the design and implementation of the app, I was unable to meet some expectations . They include; one, the communication between the front-end and the and the server to update the change in tickets available to the user once a user books a ticket. The other challenge is to properly configure the sold out message to the exact movie which has been fully sold out, to reflect true message to the usr on the sold out tickets for respective movies.

In the future deployments, I will be working to add a search feature where a user can dynamically search for the movie in the search instead of having to go through the movie list in an event whereby the movie store grows exponentially faster in future.


# PROJECT SET-UP
To set-up this project, you will need to have the following installed in your computer:
    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
    3. JSON server
   
To run the project, you need to;
    1. Create a new project folder.
    2. Create a new GitHub repository
    3. Create and the following files
       1. index.html
       2. styles.css
       3. app.js
       4. db.json
    4. run json-server --watch movies.json on your terminal to get the backend started.
    5. add any necessary code to make the app better than its current version.



