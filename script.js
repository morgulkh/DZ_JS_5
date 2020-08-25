'use strict';

//1
let calculator = {
    x:0,
    y:0,
    read() {
        this.x = +prompt('введите число');
        this.y = +prompt('введите число');
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    }
};

calculator.read();

alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

//2
let coffeeMachine = {
    message: `Your coffee is ready!`,
    start() {
        window.setTimeout(() => alert(this.message), 3000);
    }
};
coffeeMachine.start();

//3
let counter = {
    x: 0,
    inc() {
        this.x++;
        return this;
    },
    dec() {
        this.x--;
        return this;
    },
    getValue() {
        return this.x;
    }
};

let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

//4
let calc = {
    x: 0,
    y: 0,
    getSum(a, b){
        this.x = a;
        this.y = b;
        let result = calculator.sum.call(this);
        return(`${a} + ${b} = ${result}`);
    },
    getMulti(a, b){
        this.x = a;
        this.y = b;
        let result = calculator.multi.call(this);
        return(`${a} * ${b} = ${result}`);
    },
    getDiff(a, b){
        this.x = a;
        this.y = b;
        let result = calculator.diff.call(this);
        return(`${a} - ${b} = ${result}`);
    },
    getDiv(a, b){
        this.x = a;
        this.y = b;
        let result = calculator.div.call(this);
        return(`${a} / ${b} = ${result}`);
    },
};

alert(calc.getSum(1, 1));
alert(calc.getMulti(1, 1));
alert(calc.getDiff(1, 1));
alert(calc.getDiv(1, 0));

//5
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.language, ['', '']); // undefined

//6
let user = {
    name: 'John'
}
function format(start, end) {
    console.log(start + this.name + end);
}
let userFormat = format.bind(user);
userFormat('<<<', '>>>');

//7
function concat(str1, concatenator) {
    return function(name){
        return str1 + concatenator + name;
    };
}
let hello = concat('Hello', ' ');

console.log(hello('John'));


//1.1
//cycle
function cube(x) {
    let result = x;
    for (let i = 1; i < 3; i++) {
        result *= x;
    }
    return result;
}

console.log(cube(2));

//recursion
function cubeRec(x, n = 3) {
    if (n == 1) {
        return x;
    } else {
        return x * cubeRec(x, n - 1);
    }
}

console.log(cubeRec(2));

//1.2
function sum() {
    let args = [...arguments];
    switch (args.length) {
        case 2:
            return args[1] + args[0];
        case 1:
            return args[0];
        case 0:
            return 0;
        default:
            args[1] += args[0];
            args.shift();
            return sum(...args);
    }
}

console.log(sum(1,1,1,1,1,1,1,1,1,1));