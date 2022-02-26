function encriptar(elemento){
    //var palabra = document.getElementsByTagName("input")[0].value;
    var palabra = $("#password").val();
    var palabra_codificada = btoa(palabra);

    let mayusculas = new RegExp("^(?=.*[A-Z])");
    let cara_Especial = new RegExp("^(?=.*[!@#$%&*])");
    let numeros = new RegExp("^(?=.*[0-9])");
    let minusculas = new RegExp("^(?=.*[a-z])");
//&& mayusculas.test(palabra) && cara_Especial.test(palabra) && numeros.test(palabra) && minusculas.test(palabra)
    if (palabra.length < 10){
 		alert("La contraseña debe ser mayor a 10 digitos");
   	return false;
	}
	if (mayusculas.test(palabra) && cara_Especial.test(palabra) && numeros.test(palabra) && minusculas.test(palabra)){
			alert("Su contraseña es segura y ha sido encriptada");
			document.getElementById("resultado").innerHTML = palabra_codificada;
		return false;
	}
}
 
function desencriptar(elemento){
    var palabra = document.getElementsByTagName("input")[1].value;
    var palabra_descodificada = atob(palabra);
    alert("La contraseña ha sido desencriptada");
    document.getElementById("resultado").innerHTML = palabra_descodificada;
}