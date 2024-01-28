// Variable

let btn = document.querySelector('.new-qoute');
let person = document.querySelector('.person');
let qoute = document.querySelector('.qoute');


const qoutes = [
    {
        qoute: '"i do the best i know how - the very best i can; and i mean to keep pn doing so until the end."',
        person: 'Abraham Lincoln'
    }, {
        qoute: '"Your time is limited, so dont waste it living someone elses life."',
        person: 'Steve Jobs'
    }, {
        qoute: '"If you want to live a happy life, tie to a goal,not people or things."',
        person: 'Albert Einstein'
    }, {
        qoute: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        person: 'Benjamim Franklin'
    }, {
        qoute: '"The best way to find yourself is to lose yourself in the service of others."',
        person: 'Mahatma Gandhi'
    },
];

// Add Event listener

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
});