//DATE
const latin = 'abcdefghijklmnopqrstuvwxyz';
const cyrrilic = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const digits = '0123456789';

const latinUp = latin.split('').map(l => l.toUpperCase()).join('');
const cyrillicUp = cyrrilic.split('').map(c => c.toUpperCase()).join('');


//functions
//generate keys:
document.getElementById('generate').onclick = function () {
    const keysList = [];    //result of programm
    const checkedList = []; //only picked options
    let keysQantity = document.querySelector('#keys-number').value;
    //quantity of keys, set by user
    let keysLength = +document.querySelector('#key-length').value;
    //length of keys, set by user
    let userSymbols = ''; //set of symbols, which user picked in checkbox
    let userInputs = document.querySelectorAll('.user-symbols');
    userInputs.forEach(elem => {
        if (elem.checked) {
            checkedList.push(elem.id);
        }
    });
    // console.log(checkedList);
    if (checkedList.includes('digits')) userSymbols += digits;
    if (checkedList.includes('upper-case-latin')) userSymbols += latinUp;
    if (checkedList.includes('lower-case-latin')) userSymbols += latin;
    if (checkedList.includes('upper-case-cyrillic')) userSymbols += cyrillicUp;
    if (checkedList.includes('lower-case-cyrillic')) userSymbols += cyrrilic;
    // console.log(userSymbols);
    while (keysList.length < keysQantity) {
        let uniqKey = '';
        for (let symbol = 0; symbol < keysLength; symbol += 1) {
            uniqKey += userSymbols[
                Math.floor(
                    Math.random() * userSymbols.length
                )
            ];
        }
        if (!keysList.includes(uniqKey)) keysList.push(uniqKey);
    }
    var csv = 'Unique keys:\n'
    keysList.forEach(function (uniqKey) {
        csv += uniqKey;
        csv += '\n';
    });
    // console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Unique keys.csv';
    hiddenElement.click();
}


