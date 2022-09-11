type Data = {
    x: number;
    y: number;
};

function print(obj: Data) {
    console.log({ x: obj.x, y: obj.y });
}

print({ x: 100, y: 100 });

type ID = number | string;

function ex5(id: ID) {
    return id;
}

type VerySpecialString = string;

function ex6(inp: VerySpecialString) {
    const a: VerySpecialString = 'a';

    return { a, inp };
}

// how to extends type
type SuperData = Data & { date: Date };

function ex91(obj: SuperData) {
    const { x, y, date } = obj;
    console.log({ x, y, date });
}
