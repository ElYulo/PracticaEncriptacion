//alert("Hello Peter");
function encryptar(message) {
	let encryptarMensaje;

	const mensajeArr = message.split("");
	//console.log("mensaje array", mensajeArr);

	let encriptarMensajeArr = [];

	for (i=0; i<mensajeArr.length; i++){
		let letra;
		switch(mensajeArr[i]){
			case "a":
				letra = "+";
				break;

			case "b":
				letra = "'";
				break;
			
			case "c":
				letra = "<";
				break;
			
			case "d":
				letra = "ó";
				break;
			
			case "e":
				letra = "╞";
				break;
			
			case "f":
				letra = "^";
				break;
			
			case "g":
				letra = "Ñ";
				break;
			
			case "h":
				letra = "~";
				break;
			
			case "i":
				letra = "¿";
				break;
			
			case "j":
				letra = "?";
				break;
			
			case "k":
				letra = "*";
				break;
			
			case "l":
				letra = "}";
				break;
			
			case "m":
				letra = "{";
				break;
			
			case "n":
				letra = "█";
				break;
			
			case "o":
				letra = "┼";
				break;
			
			case "p":
				letra = "Ä";
				break;
			
			case "q":
				letra = "▌";
				break;
			
			case "r":
				letra = "τ";
				break;
			
			case "s":
				letra = "○";
				break;
			
			case "t":
				letra = "$";
				break;
			
			case "u":
				letra = "%";
				break;
			
			case "v":
				letra = "/";
				break;
			
			case "w":
				letra = "@";
				break;
			
			case "x":
				letra = "!";
				break;
			
			case "y":
				letra = "=";
				break;
			
			case "z":
				letra = "|";
				break;
			default:
				letra = mensajeArr[i];
				break;
		}//termina el switch

		encriptarMensajeArr.push(letra);//muestra la palabra a encriptar
		//console.log("Contraseña encriptada", encriptarMensajeArr);
	}//termina el for

	encryptarMensaje = encriptarMensajeArr.join(" ");
	return encryptarMensaje;



};//termina la funcion

function desencriptar(message) {
	let desencryptarMensaje;

	const mensajeArr = message.split("");
	console.log("mensaje array", mensajeArr);

	let desencriptarMensajeArr = [];

	for (i=0; i<mensajeArr.length; i++){
		let letra;
		switch(mensajeArr[i]){
			case "+":
				letra = "a";
				break;

			case "'":
				letra = "b";
				break;
			
			case "<":
				letra = "c";
				break;
			
			case "ó":
				letra = "d";
				break;
			
			case "╞":
				letra = "e";
				break;
			
			case "^":
				letra = "f";
				break;
			
			case "Ñ":
				letra = "g";
				break;
			
			case "~":
				letra = "h";
				break;
			
			case "¿":
				letra = "i";
				break;
			
			case "?":
				letra = "j";
				break;
			
			case "*":
				letra = "k";
				break;
			
			case "}":
				letra = "l";
				break;
			
			case "{":
				letra = "m";
				break;
			
			case "█":
				letra = "n";
				break;
			
			case "┼":
				letra = "o";
				break;
			
			case "Ä":
				letra = "p";
				break;
			
			case "▌":
				letra = "q";
				break;
			
			case "τ":
				letra = "r";
				break;
			
			case "○":
				letra = "s";
				break;
			
			case "$":
				letra = "t";
				break;
			
			case "%":
				letra = "u";
				break;
			
			case "/":
				letra = "v";
				break;
			
			case "@":
				letra = "w";
				break;
			
			case "!":
				letra = "x";
				break;
			
			case "=":
				letra = "y";
				break;
			
			case "|":
				letra = "z";
				break;
			default:
				letra = mensajeArr[i];
				break;
		}//termina el switch
		desencriptarMensajeArr.push(letra);//Muestra la palabra a desencriptar
		//console.log("Contraseña desencriptada", desencriptarMensajeArr);
	}//termina el for
	desencryptarMensaje = desencriptarMensajeArr.join("");
	return desencryptarMensaje;
};//termina la funcion
console.log(desencriptar("~┼}+"));//muestra la palabra desencriptada
console.log(encryptar("hola"));//muestra la palabra enncriptada
