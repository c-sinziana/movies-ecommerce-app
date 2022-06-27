# Movie ECommerce App

A responsive web application that allows the user to see a selection of movies. 

Technologies used were React with JS (with Router for navigation), HTML and CSS (SCSS).

## Setup guide:

`node` and `npm` are needed to be installed globally on the machine with the cloned project.  

Installation:

`npm install`  

To start the server:

`npm start`   

## Personal notes:

This was my first complex project from a styling perspective, where I've created multiple components which I've imported afterwards in the main screen.

The navigation bar has three sections, register, sign in and the logo of the page, where I've used Router.

It was a great opportunity to learn how to use flexbox, because it was an important step of the structure of the responsive page.

One of the most challenging parts was to make the two arrows on the slider change the image and in order to do that I've force rerendered the screen. 

The data rendered in the application are stored in a JS component as an array of objects. 
Whenever I needed data from this component, I've imported the required constants and displayed them accordingly.