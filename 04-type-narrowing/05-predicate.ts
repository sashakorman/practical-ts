interface Fish {
    swim: boolean;
}

interface Bird {
    fly: boolean;
}

function check(data: Fish | Bird) {
    if (isFish(data)) {
        return data;
    }

    return data;
}

function check1(data: (Fish | Bird)[]) {
    // filter always return incoming type
    const result = data.filter(x => isFish(x));

    return result;
}

function check2(data: (Fish | Bird)[]) {
    // filter always return incoming type
    const result = data.filter((x): x is Fish => isFish(x));

    return result;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
