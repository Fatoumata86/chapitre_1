const express = require("express");

const app = express();

const port = 8000;

const poke = require("../bonus-1/poke")

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"],
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"],
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
    },
]

var pokemon = [
    {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/"
        }
]

app.get("/poke", (req, res) => {
    res.json(pokemon)
})

app.get("/poke/:id/", (req, res) => {
    const id = req.params.id;
    res.send(`${pokemon[id - 1].name},${pokemon[id - 1].url} `)
})

app.get("/", (req, res) => {
    res.send("Authors API");
});

app.get("/authors/:id/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].name}, ${authors[id - 1].nationality}`);
})

app.get("/authors/:id/books/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].books}`);
});

app.get("/json/authors/:id", (req, res) => {
    const id = req.params.id;
    res.json({ name: authors[id - 1].name, nationality: authors[id - 1].nationality});
});
app.get("/json/authors/:id/books", (req, res) => {
    const id = req.params.id;
    res.json({ books: authors[id - 1].books});
});



app.listen(port, () => {
    console.log(`The server started on port: ${port}`);
});