// Sin spread operator
function tag(strings, arg1, arg2) {
    console.log('strings: ' + strings)
    console.log('arg1: ' + arg1)
    console.log('arg2:' + arg2)
    console.log('arguments: ' + arguments);
}

const pepito = 'Pepito';
const jose = 'Jose';

//console.log(tag `Hola, don ${pepito}, hola don ${jose}`);

// Con spread operator
function newTag(strings, ...args) {
    console.log('strings: ' + strings);
    console.log('args: ' + args);
}

newTag `Hola, don ${pepito}, hola don ${jose}`;
