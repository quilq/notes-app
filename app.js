const yargs = require('yargs');
const notes = require('./notes.js');

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
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes();
    }
});

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();

// console.log(yargs.argv);