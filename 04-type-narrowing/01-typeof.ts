function padLeft1(padding: number | string, input: string) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }

    return padding + input;

    // typeof null => 'object'
}

function padLeft2(padding: string | string[] | number) {
    if (typeof padding === 'string') {
        return padding;
    } else if (typeof padding === 'object') {
        return padding;
    } else {
        return padding;
    }
}
