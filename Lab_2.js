'use strict';

class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

   sayHi() {
        return `${this.name} says Hi!`;
    }

    canCook() {
        return `${this.name} knows how to cook`;
    }

    doExercise() {
        return `${this.name} is doing exercises`;
    }

    triple(n) {
        return n === undefined ? 1 : n * 3;
    }
}

class Teacher extends Person {
    constructor(name, yearOfBirth, subject) {
        super(name, yearOfBirth);
        this.subject = subject;
    }

    sayHi() {
        return `${super.sayHi()} to students`;
    }

    triple(n) {
        return super.triple(n) * 3;
    }
}

class Cook extends Person {
    constructor(name, yearOfBirth, rank) {
        super(name, yearOfBirth);
        this.rank = rank;
    }

    canCook() {
        return `${super.canCook()} sophisticated and delicious`;
    }
}

class Sportsman extends Person {
    constructor(name, yearOfBirth, sport) {
        super(name, yearOfBirth);
        this.sport = sport;
    }

    doExercise() {
        return `${super.doExercise()} to win competitions`;
    }
}

const jhon = new Person('Jhon', 1987);
const kate = new Teacher('Kate', 1995, 'Math');
const peter = new Cook('Peter', 1991, '6');
const max = new Sportsman('Max', 1984, 'basketball');
const ginni = new Teacher('Ginni', 1996, 'Literature');
const bob = new Teacher('Bob', 2000, 'Biology');
const jane = new Sportsman('Jane', 1999, 'volleyball');
const sven = new Cook('Sven', 1979, '2');
const lola = new Person('Lola', 2002);
const robert = new Sportsman('Robert', 1997, 'football');

const People = [
    {...jhon},
    {...kate},
    {...peter},
    {...max},
    {...ginni},
    {...bob},
    {...jane},
    {...sven},
    {...lola},
    {...robert},
];
console.log(People);
const byName = People.sort(byField('name'));

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}




