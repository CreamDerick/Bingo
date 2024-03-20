console.log("hello kuya doc");

//generateNumber(75);

let isB = false,
    isI = false,
    isN = false,
    isG = false,
    isO = false;

let BNumber,
    INumber,
    NNumber,
    GNumber,
    ONumber;

function generateNumber(max) {
    //add = +
    //sub = -
    //mul = *
    //div = /
    //remain = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    //GT >, GTE > =, LT <, LTE < =, EQ == NEQ ! =, AND &&, OR ||
    if (randomNumber <= 15) {
        BNumber = randomNumber;
        isB = true;
        console.log(`The number ${randomNumber} is in B.`)
    } 
    else if (randomNumber >= 16 && randomNumber <= 30) {
        INumber = randomNumber;
        isI = true;
        console.log(`The number ${randomNumber} is in I.`)
    }
    else if (randomNumber >= 31 && randomNumber <= 45) {
        NNumber = randomNumber;
        isN = true;
        console.log(`The number ${randomNumber} is in N.`)
    }
    else if (randomNumber >= 46 && randomNumber <= 60) {
        GNumber = randomNumber;
        isG = true;
        console.log(`The number ${randomNumber} is in G.`)
    }
    else if (randomNumber >= 61 && randomNumber <= 75) {
        ONumber = randomNumber;
        isO = true;
        console.log(`The number is in O.`)
    }
    else {
        console.log(`The number is invalismhdbfnjasbdkasdg!!!!!!!!!!!`)
    }

    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        console.log("BINGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.table ({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber
        })
    }

    
    return console.log(randomNumber);
}
//let (counter >0)
while (
isB == false||
isI == false||
isN == false||
isG == false||
isO == false
) {
    generateNumber(75);
}