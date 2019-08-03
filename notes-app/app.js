const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'A summery of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("And body: " + argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing notes');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
});

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();

