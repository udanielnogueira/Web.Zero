var resposta;

function r1(){
    resposta = document.getElementById("r1").innerHTML;
    mudarPergunta();
}

function r2(){
    resposta =  document.getElementById("r2").innerHTML;
    mudarPergunta();
}

function mudarPergunta(){
    switch(resposta){
        case "1) Caminho da floresta":
            document.getElementById("p").innerHTML = "Você avistou um urso";
            document.getElementById("r1").innerHTML = "1) Corro rápido na direção Norte";
            document.getElementById("r2").innerHTML = "2) Alimento o urso com suprimentos";
            break;
        case "2) Caminho da estrada":
            document.getElementById("p").innerHTML = "Você avistou um carro";
            document.getElementById("r1").innerHTML = "1) Tentar ligar o carro";
            document.getElementById("r2").innerHTML = "2) Seguir caminhando";
            break;

        case "1) Corro rápido na direção Norte":
            document.getElementById("p").innerHTML = "Correu demais";
            document.getElementById("r1").innerHTML = "1) Descansa";
            document.getElementById("r2").innerHTML = "2) Continua";
            break;
        case "2) Alimento o urso com suprimentos":
            document.getElementById("p").innerHTML = "Você avistou um urso";
            document.getElementById("r1").innerHTML = "1) Corro rápido na direção Norte";
            document.getElementById("r2").innerHTML = "2) Alimento o urso com suprimentos";
            break;
        




    }
}
