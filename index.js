console.log("hello kuya doc");

generateNumber(75);

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
    } 
    else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log(`The number is in I.`)
    }
    else if (randomNumber >= 31 && randomNumber <= 45) {
        console.log(`The number is in N.`)
    }
    else if (randomNumber >= 46 && randomNumber <= 60) {
        console.log(`The number is in G.`)
    }
    else if (randomNumber >= 61 && randomNumber <= 75) {
        console.log(`The number is in O.`)
    }
    else {
        console.log(`The number is invalismhdbfnjasbdkasdg!!!!!!!!!!!`)
    }

    return console.log(randomNumber);
}