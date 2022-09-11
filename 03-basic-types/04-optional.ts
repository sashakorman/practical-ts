function print1(obj: { first: string; last?: string }) {
    console.log(obj);

    // how to access optional
    obj.last?.toLocaleLowerCase();
}

print1({ first: 'Sasha' });
print1({ first: 'Sasha', last: 'Korman' });

// name?: string = 'korman' - does not work -> throws error (Parameter cannot have question mark and initializer.(1015))
function print2(name: string = 'korman') {
    console.log(name.toLocaleLowerCase());
}

print2();
