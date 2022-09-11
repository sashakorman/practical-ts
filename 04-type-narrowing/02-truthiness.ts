function printAll(data: string | undefined) {
    if (data) {
        return data.length;
    } else if (typeof data === 'undefined') {
        return data;
    }

    return data;
}
