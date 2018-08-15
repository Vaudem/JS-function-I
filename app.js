//1
console.log("------ step 1 ------")
var one = function() {
	"use strict"
	window.alert("hello");
};

one();




var one = function(msg) {
	"use strict"
	window.alert(msg);
};

one("hello");




//2
console.log("------ step 2 ------")
var hello = function() {
	"use strict"
	console.log("hello");

}
hello(); 
console.log(hello()); //undefined




//3 
console.log("------ step 3 ------")
var dummyReturn = function(p) {
	"use strict"
	return p;
}
/*var x = dummyReturn(), log(x); //error */
console.log(dummyReturn()); //undefined (car pas de valeur)
var x = dummyReturn();
console.log(x); // toujours undefined 
var x = dummyReturn("blabla");
console.log(x); //blabla 




//4
console.log("------ step 4 ------")
var foo = function() {
	"use strict"
	return "bar";
}
console.log(foo()); //bar
var x = foo();
console.log(x);  //bar



//5 
console.log("------ step 5 ------")
var helloWho = function(nom) {
	"use strict"
	return "hello " + nom;
}		
console.log(helloWho()); // hello undefined
var x = helloWho("you");
console.log(x); // hello you



//6
console.log("------ step 6 ------")

/**
* fonction permettant de définir si number
* retourner erreur sinon
* 2 méthodes : isNaN et isFinite

*/
var isNumber = function(n) {
	"use strict"
	if (!isNaN(n)) return true;
	else return false;
}

console.log(isNumber()); // false
var x = isNumber(543.334);
console.log(x);  // true



var isNumber = function(n) {
	"use strict"
	if (isFinite(n)) return true;
	else return false;
}

console.log(isNumber()); // false
var x = isNumber(543.334);
console.log(x);  // true




//7
console.log("------ step 7 ------")
/**
* fonction retourne erreur si 
*
*/	
var contraire = function(b) {
	"use strict"
	if (typeof b !== 'boolean') return new Error("Erreur, veuillez donner une valeur booléenne");
	else return !b;	
}
console.log(contraire()); // error
var x = contraire(true);  
console.log(x);	



//8
console.log("------ step 8 ------")

/*
* avec if, la fonction continue de parcourir les conditions même si une déjà remplie. + de travail.
* avec else if, quand une condition est true la fonction s'arrête.
*/
console.log("// avec if")
var isEmpty = function(p) {
	"use strict"
	if (Array.isArray(p) && p.length === 0) return true
	if (typeof p === 'string' && p.length === 0) return true
	if (typeof p === 'object' && Object.keys(p).length === 0) return true

		else return false

}
console.log(isEmpty()); // false
var x = isEmpty("abc"); //false 
console.log(x);
var x = isEmpty({});  // true
console.log(x);
var x = !isEmpty([2,2]); // true
console.log(x);



console.log("// avec else if")
var isEmpty = function(p) {
	"use strict"
	if (Array.isArray(p) && p.length === 0) return true
	else if (typeof p === 'string' && p.length === 0) return true
	else if (typeof p === 'object' && Object.keys(p).length === 0) return true

		else return false

}
console.log(isEmpty()); // false
var x = isEmpty("abc"); //false 
console.log(x);
var x = isEmpty({});  // true
console.log(x);
var x = !isEmpty([2,2]); // true
console.log(x);



//9
/* console.log("------ step 9 / test ------");
var testSelectElements = document.querySelectorAll("div");
	testSelectElements.className = "classe";
	/*testSelectElements.classList.toggle('newclasse'); 
console.log(testSelectElements);
console.log(testSelectElements.length); */






console.log("------ step 9 ------");
var addCSSClass = function(s, css){
	"use strict"
	var select = document.querySelectorAll(s);
	for (var i = 0; i < select.length; i++) {
		console.log(select[i].classList.add(css));
	};
	return Array.from(select); // return un tableau avec les classes en élément 
};







//10
console.log("------ step 10 ------");
console.log(!isEmpty(addCSSClass)); // true







var start = function(){
console.log(addCSSClass());  // undefined 
console.log(addCSSClass("div", "classe")); 
}



window.addEventListener("DOMContentLoaded", start); 



/*
var easyDOM = function() {  // comme function(easyDOM) 
var cible = document.getElementById("grandediv");
var res = document.getElementById("ptext");
console.log(cible);
console.log(cible.children); // affiche tous les enfants
for (i = 0; i < cible.children.length; i++) { // let appartient à for 
	console.log(cible.children[i]); // lister les enfants un par un
	console.log(typeof cible.children[i]); // type = objet
	console.log(cible.children[i].id);
	res.innerHTML += "id n°" + (i + 1) + ": " + cible.children[i].id + "<br>";
}
}; */
















