interface Mount {
    host: string;
    protocol: string;
}

function ex7(obj: Mount) {
    return obj;
}

interface SuperMount extends Mount {
    date: Date;
}

function ex8(obj: SuperMount) {
    const { host, protocol, date } = obj;
    console.log({ host, protocol, date });
}

// how to add new properties (not possible in types)
interface Mount {
    date: Date;
}

function ex9(obj: Mount) {
    const { host, protocol, date } = obj;
    console.log({ host, protocol, date });
}
