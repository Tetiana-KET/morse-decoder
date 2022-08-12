const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    const space = '**********';
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    let morzArray = [];
    let str = '';
    let char = '';
    arr.forEach((item) => {
        morzArray.push(item.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''));
    });

    
    for (let j = 0; j < morzArray.length; j++) {
        let currentSymbol = morzArray[j];
        if (currentSymbol === '**********') {
            char = ' ';
        } else {
            char = MORSE_TABLE[currentSymbol];
        };
        
        str = str + char;

    };

   return str;
}


module.exports = {
    decode
}