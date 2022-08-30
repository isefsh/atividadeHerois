function verificarHeroi(){
  let universo = document.querySelector("input[name=universo]:checked").value;
  let heroi = document.getElementById("heroi").value.toUpperCase();
  let img = heroi.toLowerCase().replace(/ /g, "-");

  let heroisDc = ["BATMAN","SUPERMAN","LEX LUTHOR","SHAZAM","DARKSEID"];
  let heroisMarvel = ["WOLVERINE","THOR","HOMEM ARANHA","HULK","PANTERA NEGRA"];

  if(universo == "DC"){
    heroisDc.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
    "<p>Você escolheu o herói: <br><img src='imgs/dc/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
    "</span></p>" : document.getElementById("mostrarHeroi").innerHTML = 
    "O herói digitado não foi encontrado.";
  }
  else if(universo == "Marvel"){
    heroisMarvel.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
    "<p>Você escolheu o herói: <br><img src='imgs/marvel/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
    "</span></p>" : document.getElementById("mostrarHeroi").innerHTML = 
    "O herói digitado não foi encontrado.";
  }
  else{
    document.getElementById("mostrarHeroi").innerHTML =
    "Nenhum universo foi selecionado. Tente novamente..";
  }
}