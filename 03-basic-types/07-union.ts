function ex3(inp: string | number) {
    console.log(inp);

    if (typeof inp === 'string') {
        inp.toLocaleLowerCase();
    } else {
        inp.toPrecision(1);
    }
}

ex3('a');
ex3(1);

function ex4(inp: string | number | boolean) {
    console.log(inp);

    if (typeof inp === 'string') {
        inp.toLocaleLowerCase();
    } else if (typeof inp === 'boolean') {
        return inp;
    }

    return inp;
}

ex4('a');
ex4(1);
ex4(true);
