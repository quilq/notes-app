const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));

    } else {
        console.log(chalk.bgRed('Note title taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const newNotes = notes.filter(note => note.title !== title);

    if (newNotes.length === notes.length) {
        console.log(chalk.bgRed('No note found'));
    } else {
        saveNotes(newNotes);
        console.log(chalk.bgGreen('Remove a note with title: ', title));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    if (notes.length >= 1) {
        console.log(chalk.bgGreen(getNotes()));
        for (let i = 0; i < notes.length; i++) {
            console.log(chalk.bgGreen(notes[i].title));
        }
    } else {
        console.log(chalk.bgRed('No note found'));
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
};