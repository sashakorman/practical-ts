interface NumberBox {
    contents: number;
}

interface StringBox {
    contents: string;
}

interface BooleanBox {
    contents: boolean;
}

function setContents(box: StringBox): void;
function setContents(box: NumberBox): void;
function setContents(box: BooleanBox): void;
function setContents<T>(box: T): void;
function setContents(box: any) {
    console.log(box);
}

/////////////////////////////////////////
interface GenericBox<T> {
    contents: T;
}
