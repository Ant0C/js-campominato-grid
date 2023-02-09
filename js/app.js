//***Decidiamo dove inserire la nostra griglia
const grigliaElement = document.querySelector(".griglia")
//console.log(grigliaElement)

let btnGriglia = document.getElementById("btn-griglia")
//console.log(btnGriglia)

//***Ciclo per creare la griglia con con anche nome classe e style
btnGriglia.addEventListener('click', function () {
    let numGriglia = 10
    let grigliaDiGioco = numGriglia * 10
    //console.log(grigliaDiGioco,numGriglia)

for (i=0; i<grigliaDiGioco; i++){
    let num = i + 1
    //console.log(num)
    let divCella = document.createElement ("div")
    divCella.classList.add("cella")
    divCella.innerText = `${num}`;
    divCella.style.cssText =`width:calc(100% /${numGriglia})`;
    
    //**Inseriamo la nostra griglia nel dom
    grigliaElement.append(divCella)
}

//***Seleziono il div appena creato
const celleElements = document.querySelectorAll('.cella')

//***Ad ogni click sulla cella creata stampo in console
//***il numero della cella selezionata è cambiamo il colore della cella
for (let i = 0; i < celleElements.length; i++) {
	const buttonCella = celleElements[i]
    //console.log(buttonCella)
	buttonCella.addEventListener('click', function () {
		console.log(i + 1)
        buttonCella.style.cssText =`
        width:calc(100% /${numGriglia});
        background-color: grey;`;
	})
}
})


