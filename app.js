const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// console.log(process.argv);
// console.log(yargs.argv);

// Customize yargs version
yargs.version('1.1.0');

// Create 'add' command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //required
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title, '. Body: '+ argv.body);
    }
});

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
    },
    handler: function(){
        console.log('Removing a new note');
    }
});

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes');
    }
});

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
});

yargs.parse();

// console.log(yargs.argv);