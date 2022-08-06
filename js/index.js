let butt = document.querySelector('#butt');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

function findMissingLetter(part) {
    let Alpha = "abcdefghijklmnopqrstuvwxyz";
    part = input.value;
    let start = Alpha.indexOf(part[0]);


    for (i = 0; i < part.length; i++) {
        //console.log(Alpha[start + i]); //a b c d e f 
        //console.log(part[i]);//a b c e f 
        if (part[i] !== Alpha[start + i]) {
            output.textContent = Alpha[start + i];


        }

    }
    return "No Missing Letters";
}

butt.addEventListener('click', findMissingLetter);