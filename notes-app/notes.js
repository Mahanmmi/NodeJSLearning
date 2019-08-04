const fs = require('fs');
const chalk = require('chalk');

function loadNotes() {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        // console.log(e)
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

function removeNote(title) {
    const notes = loadNotes()
    if (target = notes.find(note => {
        if (note.title === title)
            return true;
    })) {
        notes.splice(notes.indexOf(target), 1)
        saveNotes(notes)
        console.log(chalk.red.inverse("Note removed!"))
    } else {
        console.log("Cannot find " + title + " title in notes")
    }
}

function getNotes() {
    return 'Your notes...';
}

function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    // for (note of notes) {
    //     if(note.title == title){
    //         console.log('You can\'t have duplicate titles');
    //     }
    // }
    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log('Note title taken');
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
};