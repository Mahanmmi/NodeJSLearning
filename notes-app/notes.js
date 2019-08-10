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
    if (target = notes.find(note => note.title === title)) {
        notes.splice(notes.indexOf(target), 1)
        saveNotes(notes)
        console.log(chalk.red.inverse("Note removed!"))
    } else {
        console.log(chalk.red("Cannot find " + title + " title in notes"))
    }
}

function addNote(title, body) {

    const notes = loadNotes();

    const duplicateNotes = notes.find(note => note.title === title);

    // for (note of notes) {
    //     if(note.title == title){
    //         console.log('You can\'t have duplicate titles');
    //     }
    // }
    if (!duplicateNotes) {
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

function listNotes() {
    const notes = loadNotes();
    console.log(chalk.white.inverse("Your notes..."))
    notes.forEach(note => {
        console.log(note.title);
    });
}

function readNote(title) {
    const notes = loadNotes();
    if (target = notes.find(note => note.title === title)) {
        console.log(chalk.blue.inverse(target.title))
        console.log(target.body)
    } else {
        console.log(chalk.red("Cannot find " + title + " title in notes"))
    }

}

function getNotes() {
    return 'Your notes...';
}


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};  