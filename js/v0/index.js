/* Minha primeira versão do exercício*/
function verificarHeroi(){
  let universo = document.querySelector("input[name=universo]:checked").value;
  let heroi = document.getElementById("heroi").value.toUpperCase();
  let img = heroi.toLowerCase().replace(/ /g, "-");

  let heroisDc = ["BATMAN","SUPERMAN","LEX LUTHOR","SHAZAM","DARKSEID"];
  let heroisMarvel = ["WOLVERINE","THOR","HOMEM ARANHA","HULK","PANTERA NEGRA"];

  if(universo == "DC"){
    for(let i = 0; i < heroisDc.length; i++){
      heroi == heroisDc[i] ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Você escolheu o herói: <br><img src='imgs/dc/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
      "</span></p>" : "";
    }
  }
  else if(universo == "Marvel"){
    for(let i = 0; i < heroisMarvel.length; i++){
      heroi == heroisMarvel[i] ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Você escolheu o herói: <br><img src='imgs/dc/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
      "</span></p>" : "";
    }
  }
  else{
    document.getElementById("mostrarHeroi").innerHTML = 
    "<p>Nenhum universo foi selecionado. Tente novamente..</p>"
  }
}