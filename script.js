//DATE
const latin = 'abcdefghijklmnopqrstuvwxyz';
const cyrrilic = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const digits = '0123456789';

const latinUp = latin.split('').map(l => l.toUpperCase()).join('');
const cyrillicUp = cyrrilic.split('').map(c => c.toUpperCase()).join('');

const keysList = [];
let keysLength;

//functions
document.getElementById('generate').onclick = function() {
    keysLength = +document.querySelector('#key-length').value;
    keysList.length = document.querySelector('#keys-number').value;
    let userSymbols = '';
    let userInputs = document.querySelectorAll('.user-symbols');
    userInputs.forEach(elem => {
        if (elem.checked) {
            console.log(elem);
        }
    });
}
