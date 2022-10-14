"use strict";
let string = '';
let size = 8;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 1) {
            string += '██';
        }
        else {
            string += '  ';
        }
    }
    string += '\n';
}
console.log(string);
console.log('Erma');
