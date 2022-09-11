interface MyDictionary {
    [x: number]: string;
}

function dict(data: MyDictionary) {
    data[1] = 'd';
}

interface ComplexDictionary {
    [index: string]: { id: number; name: string };
}

function dict1(data: ComplexDictionary) {
    data['first'] = { id: 1, name: 'Sasha' };
}
