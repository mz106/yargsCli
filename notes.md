
### Step 1

- run npm init -y
- npm install yargs

### Step 2

File structure


    <src
    |-app.js
    |-utils
        |-index.js
    .gitignore
    >

    Add to .gitignore from gitignore.io


### Step 3

Navigate to utils/index.js and

- Import fs: `const fs = require("fs");`

### Step 4

- Create the functions addMovie and listMovies;

`const addMovie = (movieObj) => {
    try {
        const stringyObj = JSON.stringfy(movieObj);
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    };
};`


`const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('./storage.json');
        const list = JSON.parse(jsonList);
        console.log(list);
    } catch (error) {
        console.log(error);
    };
};`

`module.exports = {
    addMovie,
    listMovies
};`

- Explain the utility of try/catch blocks
- Explain that as we are using JSON, we must use the JSON methods to convert to/from JSON to access it

## Step 5

- Navigate to app.js and import yargs

`const yargs = require('yargs');`

- Import addMovie and listMovies

'const { addMovie, listMovies } = require("./utils/index.js");'

## Step 6

- Create function app to process CLI args

`const app = () => {
    try {
        if (process.argv[2] === "add") {
            addMovie({title: yargs.argv.title, actor: yargs.argv.actor});
        } else if (process.argv[2] === "list") {
            listMovies();
        } else {
            console.log("Incorrect Command");
        }
    } catch (error) {
        console.log(error);
    }
};`

### Step 7

- add the following command to the command line in the terminal

`node src/app.js "add" --title="thor" --actor="chris hemsworth"`

- Then run the following

`node src/app.js "list"`

### Step 8

- Navigate to storage.json and show the stored data
- Explain that storage.json is a database and that app is a DBMS