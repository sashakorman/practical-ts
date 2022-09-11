function log(x: Date | string) {
    // x instanceof Foo checks whether the prototype chain of x contains Foo.prototype
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
}
