function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("rele_2").innerHTML="<div class='rele2_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Desliga</a>";
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("rele_2").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Liga</a>";
    }
}
 
function Ajax(){
var xmlHttp;
        try{    
                xmlHttp=new XMLHttpRequest();// Firefox, Opera 8.0+, Safari
        }
        catch (e){
                try{
                        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
                }
                catch (e){
                    try{
                                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch (e){
                                alert("No AJAX!?");
                                return false;
                        }
                }
        }

xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState==4){
                document.getElementById('ReloadThis').innerHTML=xmlHttp.responseText;
                setTimeout('Ajax()',10);
        }
}
xmlHttp.open("GET","https://cdn.rawgit.com/VLADCONTROL/Lamp/f1704969/Lamp5.css",true); // aqui configuramos o arquivo
xmlHttp.send(null);
}

window.onload=function(){
        setTimeout('Ajax()',1000); // aqui o tempo entre uma atualização e outra
}
