function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
   }

