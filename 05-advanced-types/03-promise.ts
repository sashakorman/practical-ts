async function ex13() {
    const pro = new Promise<string>(resolve => resolve('ok'));

    return pro;
}
