function example(x: string | number, y: string | boolean) {
    // TypeScript is smart !!!
    if (x === y) {
        return x;
    }

    return y;
}
