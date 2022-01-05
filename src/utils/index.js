
const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        const stringyObj = JSON.stringify(movieObj);
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    }
};

const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('./storage.json');
        console.log(jsonList);
    } catch (error) {
        console.lof(error);
    }
};

module.exports = {
    addMovie,
    listMovies
};