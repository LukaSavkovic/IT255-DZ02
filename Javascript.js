function Function() {
	var a = document.getElementById("Name").value;
	var b = document.getElementById("LastName").value;
	var c = document.getElementById("Email").value;
	var d = document.getElementById("Seria").value;
	var e = document.getElementById("Model").value;
	var f = document.getElementById("Adress").value;
	var g = document.getElementById("Number").value;


	alert( "Vasa porudzbina glasi: Ime: " +  a + "	Prezime: " +  b + "	Email: " + c + "	Serija: " + d + "	Model: " +  e + "	Adresa: " +  f + "	Broj: " +  g);
}

// function Validation{	
// 	var a = document.getElementById("Name").value;
// 	var b = document.getElementById("LastName").value;
// 	var c = document.getElementById("Email").value;
// 	var d = document.getElementById("Adress").value;
// 	var e = document.getElementById("Number").value;

// 	var format = /[ ]/;
// 	var format1 = /[0-9+]/;
// 	var format2 = /[a-zA-Z.@,;:'_-]/;

// 		if(a == "" || b == "" || c == "" || d == "" || e == ""){ 
// 			alert("Popuni sve!")
// 			}

// 		if(a.match(format)){
// 			alert("Ime je jedna rec!");
// 		}
// 		 if(b.match(format)){
// 			alert("Prezime je jedna rec!");
// 		}

// 		if(c.match(format)){
// 			alert("Email je jedna rec!");
// 		}
			
// 	     if(!e.match(format1) || e.match(format2)){
// 							    alert("Broj samo brojevi i + !")
// 							 }
// 		if(!a.match(format) && !b.match(format) && !c.match(format) &&
// 	       e.match(format1) && !e.match(format2) && a != "" && b != "" && naslov != "" && 
// 		   c != "" && e != ""){
// 			alert("Sve je u redu.")
// 			}

// }