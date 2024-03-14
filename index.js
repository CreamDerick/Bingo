console.log("hello kuya doc");

generateNumber(30);

function generateNumber(max) {
    //add = +
    //sub = -
    //mul = *
    //div = /
    //remain = %
    let randomNumber = Math.floor(Math.random() * max) + 1
    //GT >, GTE > =, LT <, LTE < =, EQ == NEQ ! =, AND &&, OR ||
    if (randomNumber <= 15) {
        console.log(`The number is in B.`)

    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log(`The number is in I.`)
    }
    else {
        console.log(`The number is invalismhdbfnjasbdkasdg!!!!!!!!!!!`)
    }

    return console.log(randomNumber);
}