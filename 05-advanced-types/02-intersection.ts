interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

// has all members of both interfaces
type ColorfulCircle = Colorful & Circle;

function ex12(data: ColorfulCircle) {
    console.log(data.color, data.radius);
}
