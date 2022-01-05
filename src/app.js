
const yargs = require("yargs");
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv
const { addMovie, listMovies } = require("./utils");

const app = () => {
    if (process.argv[2] === "add") {
        addMovie({title: yargs.argv.title, 
                  actor: yargs.argv.actor});
    } else if (process.argv[2] === "list") {
        listMovies();
    } else {
        console.log("Incorrect command");
        console.log(process.argv)
    };
};

app();