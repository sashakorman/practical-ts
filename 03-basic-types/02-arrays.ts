function ex2() {
    const ar: string[] = [];
    ar.push('a');
    ar.push('b');

    const ar1: Array<string> = [];
    ar1.push('a');
    ar1.push('b');

    const br: [string] = ['a'];
    const br1: [string, number] = ['a', 1];

    console.log(ar, ar1, br, br1);
}
