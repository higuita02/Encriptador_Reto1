

var textValue = "";
var textEncryptionSet = document.getElementById('textEncryption');
var textChange = "";

//alert("hola");



function desEcryptionVocals() {

    let vectorModificado = [];



    textValue = document.getElementById("inputTex").value;
    console.log("valor en el texto" + textValue);

    let vectorString = Array.from(textValue);
    console.log(vectorString);

    for (let index = 0; index < vectorString.length; index++) {

        const element = vectorString[index];
        if (vectorString[index] != "a" && vectorString[index] != "e" && vectorString[index] != "i" && vectorString[index] != "o" && vectorString[index] != "u") {
            vectorModificado.push(vectorString[index]);
        } else {
            if (vectorString[index] == "a" && vectorString[index + 1] == "i") {
                vectorModificado.push("a");
                alert("ai detectado")
                index++
            }

            if (vectorString[index] == "e" && vectorString[index + 1] == "n" && vectorString[index + 2] == "t" && vectorString[index + 3] == "e" && vectorString[index + 4] == "r") {

                alert("enter detectado")
                vectorModificado.push("e");
                index = index + 4;

            }

            if (vectorString[index] == "i" && vectorString[index + 1] == "m" && vectorString[index + 2] == "e" && vectorString[index + 3] == "s") {

                vectorModificado.push("i");
                index = index + 3;

            }

            if (vectorString[index] == "o" && vectorString[index + 1] == "b" && vectorString[index + 2] == "e" && vectorString[index + 3] == "r") {


                vectorModificado.push("o");
                index = index + 3;
            }

            if (vectorString[index] == "u" && vectorString[index + 1] == "f" && vectorString[index + 2] == "a" && vectorString[index + 3] == "t") {

                vectorModificado.push("u");
                index = index + 3;
            }
        }

    }

    vectorModificado = vectorModificado.join("");
    console.log("descodificado" + vectorModificado);

    return vectorModificado;
}


function ecryptionVocals(texto) {

    let vectorString = Array.from(texto);
    console.log(vectorString);
    let vectorModificado = vectorString.map(item => {

        switch (item) {
            case "a":

                item = "ai";
                return item;
                break;

            case "e":
                item = "enter"
                return item;
                break;

            case "i":
                item = "imes"
                return item;
                break;

            case "o":
                item = "ober"
                return item;
                break;

            case "u":
                item = "ufat"
                return item;
                break;

            default:
                return item;
                break;
        }

    })

    console.log(vectorModificado);

    let vectorModificadoaStrig = vectorModificado.join("");

    console.log(vectorModificadoaStrig);

    return vectorModificadoaStrig;





}

function copyText() {

    // alert("hola");
    var codigoACopiar = document.getElementById('textEncryption');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);

    alert("el texto se copio correctamente :)");
}


function checkTex(texto) {
    if (texto != "") {

        console.log("soy diferente de vacio:" + texto);

        document.getElementById('containerImg').style.display = 'none';
        document.getElementById('containerTextImg').style.display = 'none';
        document.getElementById('containerImg').style.display = 'none';
        document.getElementById('textEncryption').style.display = 'inline-block';
        document.getElementById('btnCopiarTextoEncriptado_id').style.display = 'inline-block';


        let cifrado = ecryptionVocals(texto);
        console.log(cifrado);
        textEncryptionSet.textContent = cifrado;


    } else {
        console.log("estoy vacio");

        document.getElementById('containerImg').style.display = 'inline-block';
        document.getElementById('containerTextImg').style.display = 'inline-block';
        document.getElementById('containerImg').style.display = 'inline-block';
        document.getElementById('textEncryption').style.display = 'none';
        document.getElementById('btnCopiarTextoEncriptado_id').style.display = 'none';
    }

}


function checkTex2(texto) {
    if (texto != "") {

        console.log("soy diferente de vacio:" + texto);

        document.getElementById('containerImg').style.display = 'none';
        document.getElementById('containerTextImg').style.display = 'none';
        document.getElementById('containerImg').style.display = 'none';
        document.getElementById('textEncryption').style.display = 'inline-block';
        document.getElementById('btnCopiarTextoEncriptado_id').style.display = 'inline-block';


        let descifrado = desEcryptionVocals(texto);
        console.log(descifrado);
        textEncryptionSet.textContent = descifrado;


    } else {
        console.log("estoy vacio");

        document.getElementById('containerImg').style.display = 'inline-block';
        document.getElementById('containerTextImg').style.display = 'inline-block';
        document.getElementById('containerImg').style.display = 'inline-block';
        document.getElementById('textEncryption').style.display = 'none';
        document.getElementById('btnCopiarTextoEncriptado_id').style.display = 'none';
    }

}



function getText() {
    textValue = document.getElementById("inputTex").value;
    console.log(textValue);
    //return textValue;

    checkTex(textValue);
}

function getText2() {
    textValue = document.getElementById("inputTex").value;
    console.log(textValue);
    //return textValue;

    checkTex2(textValue);
}




