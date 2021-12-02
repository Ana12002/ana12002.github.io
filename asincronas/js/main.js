let RegistrosHTML = document.getElementById('RegistrosHTML');
let arrayRegistros = [];

async function leeRegistros(){
    //var nombre= document.getElementById('nombre').value;
    //var ip = document.getElementById('ip').value;
    const respuesta = await fetch("http://www.geoplugin.net/json.gp?ip=189.142.199.18");
    const registros = await respuesta.json();
    

    return registros;
}

async function muestraRegistros(){
    try{
        arrayRegistros = await leeRegistros();
        
    }
    catch(e){
        console.log("Error generado:" +e);
    }
    console.log(arrayRegistros);
    RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + "IP:"+ arrayRegistros.geoplugin_request +  "<br/> Ciudad: "+ arrayRegistros.geoplugin_city + "<br/> Pais: " + arrayRegistros.geoplugin_countryName;
    
   /*   arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + "IP" + item.geoplugin_request + item.geoplugin_city + " " + item.geoplugin_countryName + "<br>";

    });*/
    
    
}

muestraRegistros(); 