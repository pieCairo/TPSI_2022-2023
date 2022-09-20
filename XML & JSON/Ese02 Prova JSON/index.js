'use strict'

let studente = {
    "nome" : "mario",
    "cognome" : "rossi",
    "eta" : 16,
    "studente" : true,
    "images" : ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    "hobbies" : [], // vettore al momento vuoto
    "pos": { "x": 40, "y": 300 }, // oggetto annidato
    "stampa" : function () { alert("Hello " + this.nome); },
    "fullName" : function () { return this.nome + " " + this.cognome; }
};

function esegui() {
    console.log(studente["nome"]);
    console.log(studente.nome);
    console.log(studente.fullName());

    if("residenza" in studente) {
        console.log(studente["residenza"]);
    }
    else {
        console.log("La chiave residenza non esiste, aggiunta in automatico");
        studente["residenza"] = "Fossano";
        console.log(studente["residenza"]);
    }

    let studente2 = studente;

    studente2["nome"] = "Minnie";

    console.log(studente["nome"]);


    let aus = "";
    for(let key in studente)
    {
        if(typeof(studente[key]) == "object")
            aus = JSON.stringify(studente[key]);
        else
            aus = studente[key];

        console.log(key + " = " + aus + " --> " + typeof(studente[key]));
    }

    for(let image of studente.images)
    {
        console.log(image);
    }




}