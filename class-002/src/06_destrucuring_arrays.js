const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// without destructuring
const lunes = weekDays[0];
const martes = weekDays[1];
const miercoles = weekDays[2];
console.log(lunes, martes, miercoles);

// with destructuring
const [a, b, c] = weekDays;
console.log(a, b, c);

// also, without assignment:
let ichi, ni, san;
[ichi, ni, san] = ['uno', 'dos', 'tres'];
console.log(ichi, ni, san);

// destructuring assignment returning values from a function
function players() {
    return ['player1', 'player2', 'player3', 'player4'];
}

let [joan, carlos, david, dani] = players();
console.log(joan, carlos, david, dani);
