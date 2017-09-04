function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
   
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";    
}
