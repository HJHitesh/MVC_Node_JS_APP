/********************************************************************************* 
* ITE5315 – Assignment 2 
* I declare that this assignment is my own work in accordance with Humber Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Hitesh  Student ID: N01610330 Date: 20 NOV 
*********************************************************************************/

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars setup
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

const petData = {
    pageTitle: "My Favorite Pets Gallery",
    studentInfo: {
        name: "Hitesh",
        studentId: "N01610330",
        email: "n01610330@humber.ca"
    },
    pets: [
        {
            name: "Luna",
            species: "Cat",
            breed: "Persian",
            age: 3,
            favoriteFood: "Tuna",
            description: "Luna is a gentle Persian cat who loves to cuddle",
            imageUrl: "/images/cat.jpeg"
        },
        {
            name: "Max",
            species: "Dog",
            breed: "Golden Retriever",
            age: 2,
            favoriteFood: "Dog treats",
            description: "Max is an energetic dog who loves playing fetch",
            imageUrl: "/images/dog.jpeg"
        }
    ]
};

app.get('/', (req, res) => {
    res.render('main', petData);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});