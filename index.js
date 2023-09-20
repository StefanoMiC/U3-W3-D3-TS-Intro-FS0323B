// assicurarsi di avere TS installato con "tsc -v", se dà un valore di versione allora è ok
// per avviare la compilazione: tsc [nomefile]
// per avviare il watcher: tsc [nomefile] -w
console.log("hello world");
// let myVar = "Stefano!"; // tipo inferito sarà "string"
// let myVar = 0; // tipo inferito sarà "number"
var myVar; // assegnazione manuale del tipo
// myVar = "Stefano"; // errore
myVar = 0;
myVar = 100;
// myVar = true
// Type Inference (inferenza del tipo)
// TypeScript riconosce e assegna in automatico i tipi rispetto ad un valore iniziale
// let myVar2: string = "Stefano"; // NON APPLICARE IL TIPO SEMPLICE MANUALMENTE, se possibile lasciate che la Type Inference assegni automaticamente il tipo,
// perché altrimenti, come in questo caso, sarebbe ridondante
var myVar2 = "Stefano";
// myVar2 = 40; // error
var myVar3;
// se la variabile avrà any come tipo, non sarà più possibile controllarne l'accuratezza
myVar3 = true;
myVar3 = "Stringa";
myVar3 = 123;
// non c'è più il controllo sul valore assegnabile a myVar3
// TIPI PRIMITIVI
// string
// number
// boolean
// null
// undefined
// any !! DA USARE CON CAUTELA, POSSIBILMENTE... NON USARE !! (usarlo spegne COMPLETAMENTE i controlli utili di TS) - è più facile trovarlo già assegnato,
//     in quel caso indica la necessità di tipizzare quel dato manualmente
// unknown
// TIPI STRUTTURALI
// Array
// Object
// Function
myVar.toFixed(1);
// myVar2.repeat(2);
var sum = function (num1, num2) {
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return num1 + num2;
    }
    else {
        return "inserisci due numeri";
    }
};
console.log(sum("14", "5"));
// parametro opzionale lo possiamo specificare con un ?
// const sumWithTS = function (num1: number, num2?: number) {
//   return num2 ? num1 + num2 : num1;
// };
// sumWithTS(5); // il secondo parametro è opzionale, non serve passarlo per forza
var sumWithTS = function (num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    return num1 + num2;
};
sumWithTS(5); // il secondo parametro è ha un default value, non serve passarlo per forza
var mixedAddition = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "parametri misti, passa due numeri per ottenere il risultato" + par1.toString();
    }
};
var mixedParams = function (par1, par2) { };
// unknown Type
// il tipo unknown prende il tipo in base al contesto in cui è utilizzato
var maybe;
if (maybe === true) {
    var myBoolean = maybe; // :boolean
}
if (typeof maybe === "string") {
    var myNewString = maybe; // :string
}
// ARRAY
// const myArray: Array<string | number> = [];
// const myArray: Array<StringOrNumber> = [];
// const myArray: (string | number)[] = [];
var myArray = [];
myArray.push("ciao");
myArray.push(0);
var myArray2 = [1]; // il tipo number[] è inferito grazie al valore iniziale interno all'array (number)
// myArray2.push("ciao")
myArray2.push(0);
console.log(myArray);
myArray2.forEach(function (n) { return n.toString(); });
var myArray3 = []; // l'array è vuoto e gli assegnamo il tipo string[] manualmente
myArray3.push("uno");
myArray3.push("due");
myArray3.push("tre");
myArray3.forEach(function (s) { return s === null || s === void 0 ? void 0 : s.length; }); // se il tipo di myArray3 accetta l'eventuale undefined (non ancora arrivato), dobbiamo gestire il caso in cui
// "s" sia potenzialmente undefined. il nullish coalescing operator controlla la presenza del valore !== undefined prima di procedere
// TUPLE
var myTuple = [0, ""];
var myTupleOfThree = [0, true, ""];
myTupleOfThree[2].concat("yes"); // la posizione associata all'elemento della tupla ci consiglierà i metodi relativi a quel tipo specifico (string in questo caso)
// questa non è una tupla, non forza il tipo in una data posizione, e non ci forza il numero massimo di elementi
var notATuple = ["Stefano", 50, true];
notATuple[0].toString(); // toString() fa parte dell'intersezione dei metodi disponibili su tutti e tre i tipi (toLocaleString, toString, valueOf)
// typescript suggerisce solo i metodi che è certo possano andare bene per tutti e tre i tipi, non sapendo per certo quale sarà il valore estratto in una certa posizione di questo array ( che non è una tupla )
// FUNCTION TYPE
var addition = function (n1, n2) {
    return n1 + n2;
};
var empty = function () { };
// let newFunc: Function = addition; // ad un contenitore che si aspetta un valore di Function generico possiamo assegnare qualsiasi funzione
// newFunc = empty
var newFunc; // ad un contenitore che specifica a priori il tipo di funzione che accetterà,
// dovremo assegnare necessariamente una funzione dalle stesse caratteristiche
newFunc = addition;
// newFunc = empty // non funziona perché empty non rispetta le caratteristiche del tipo che newFunc si aspetta
// OGGETTI
var obj = {
    name: "Stefano",
    surname: "Miceli",
    hairColor: "brown",
    height: 185,
    age: 33
};
// il tipo Oggetto è inferito automaticamente grazie al valore iniziale del nostro oggetto, che ha particolari caratteristiche (chiave-valore)
console.log(obj.hairColor.length);
var obj2 = {
    firstName: "mario",
    lastName: "rossi"
};
var obj3 = {
    name: "Riccardo",
    surname: "Gulin",
    age: 37,
    hairColor: "brown",
    height: 185,
    isRemote: true,
    country: "Italy"
};
var obj4 = {
    name: "Stefano",
    surname: "Casasola",
    age: 35,
    hairColor: "light brown",
    height: 185,
    isRemote: true
    // country non è obbligatorio
};
var student1 = {
    name: "Umberto",
    eyes: true,
    height: 170,
    hasWebcam: true,
    batch: "FS0323B"
};
var student2 = {
    name: "Massimiliano",
    eyes: true,
    height: 175,
    hasWebcam: true,
    batch: "FS0323B",
    numOfLimbs: 4
};
var student3 = {
    name: "Tina",
    eyes: false,
    height: 160,
    hasWebcam: false,
    batch: "FS0323B"
};
var arrOfStudents = [];
arrOfStudents.push(student1);
arrOfStudents.push(student2);
arrOfStudents.push(student3);
console.log(arrOfStudents);
arrOfStudents.forEach(function (s) { return s.height; }); // le caratteristiche dell'oggetto rimangono associate anche quando l'oggetto "viaggia" come parametro
// grazie al Generic il tipo di "topic" viene deciso al momento dell'utilizzo dell'interfaccia
// qui possiamo stabilire un qualsiasi tipo di valore per caso specifico
var U1 = {
    name: "Unit1",
    assignedTeacher: "Stefano Miceli",
    //   topic: "HTML, CSS, JS I, JS II, BW1"
    topic: "HTML"
};
var U2 = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: ["UX", "CSS", "Framework", "SASS", "JS III", "BW2"]
};
// const U3: EpicodeUnit<{weeklyTopics: string[]}[]> = {
var U3 = {
    name: "Unit3",
    assignedTeacher: "Stefano Miceli",
    topic: [
        { weeklyTopics: ["React", "State", "Props"] },
        { weeklyTopics: ["Hooks", "Lifecycle Methods", "Router", "Redux Intro"] },
        { weeklyTopics: ["Redux ADV", "Redux EXTRA", "TS Intro", "TS React"] }
    ]
};
// non siamo limitati a questi 3 in ogni caso, se decidessimo di creare una U4 con struttura di topic ancora diversa,
// ci basterà passare il tipo corrispondente attraverso il parametro dell'interfaccia
