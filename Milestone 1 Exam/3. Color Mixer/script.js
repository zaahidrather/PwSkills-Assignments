let input1 = document.querySelector("#color1");
let input2 = document.querySelector("#color2");
let output = document.querySelector("h2");
let btn = document.querySelector("button");
let form = document.querySelector("form");

function mix(event) {
    event.preventDefault();

    let firstColor = input1.value.toLowerCase();
    let secondColor = input2.value.toLowerCase();
    let mixedColor;

    switch (firstColor) {

        case 'red':
            switch (secondColor) {
                case 'blue':
                    mixedColor = 'purple'
                    break;
                case 'yellow':
                    mixedColor = 'orange'
                    break;
                default:
                    mixedColor = 'Invalid color combination';
            }
            break;

        case 'blue':
            switch (secondColor) {
                case 'red':
                    mixedColor = 'purple'
                    break;
                case 'yellow':
                    mixedColor = 'green'
                    break;
                default:
                    mixedColor = 'Invalid color combination';
            }
            break;

        case 'yellow':
            switch (secondColor) {
                case 'red':
                    mixedColor = 'orange'
                    break;
                case 'blue':
                    mixedColor = 'green'
                    break;
                default:
                    mixedColor = 'Invalid color combination';
            }
            break;

        default:
            mixedColor = 'Invalid color combination';
    }
    output.innerHTML = mixedColor.toUpperCase();
}
