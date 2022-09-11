interface Person {
    id: number;
    name: string;
}

interface Car {
    id: number;
    name: string;
}

const person: Person = { id: 1, name: 'sasha' };
const car: Car = { id: 2, name: 'korman' };

let anotherCar: Car = person;

///////////////////

interface Point {
    x: number;
    y: number;
}

interface Named {
    name: string;
}

function logPoint(point: Point) {
    console.log({ x: point.x, y: point.y });
}

function logName(x: Named) {
    console.log(x.name);
}

const obj = {
    x: 0,
    y: 0,
    name: 'hello'
};

logPoint(obj);
logName(obj);
