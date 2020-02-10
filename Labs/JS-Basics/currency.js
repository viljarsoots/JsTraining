let eur = 0;
let usd = 0;

function convertToUsd(){
     usd = ((document.getElementById("eur").value) * 1.1).toFixed(2);
     document.getElementById("usd").value = usd;
}

function convertToEur(){
    eur = ((document.getElementById("usd").value) * 0.9).toFixed(2);
    document.getElementById("eur").value = eur;
}