/*/*//**
 * Created by robsonmathias on 15/05/17.
 */

// var varArray = [123,456,123,"adadasd", varString];
// var a = 0;
// while(a < varArray.length){
//     console.log(varArray[a])
//     a++;
// }

var childrenList = [
    1.3,
    1,
    1.2,
    1.6,
    1.7,
    1.8
]

var looper = 1.4;
var rodaGigante = 1.2;
var barcoViking = 1.5;


function check (limitador, lista){
	console.log(limitador, lista)
}
for(var it in lista) {
	if (limitador > lista [it]) {
		console.log('Acesso negado:' +lista[it]);
	} else {
		console.log('Acesso permitido: ' +lista[it]);
	}
}


/*



console.log('loooper')
var i = 0;
while(i < childrenList.length) {

    if(looper > childrenList[i]) {
        console.log('Acesso negado: '+childrenList[i])
    } else {
        console.log('Acesso permitido: '+childrenList[i])
    }

    i++;

}
var i = 0;
console.log('rodaGigante')
while(i < childrenList.length) {

    if(rodaGigante > childrenList[i]) {
        console.log('Acesso negado: '+childrenList[i])
    } else {
        console.log('Acesso permitido: '+childrenList[i])
    }

    i++;

}

var i = 0;
console.log('barcoViking')
while(i < childrenList.length) {

    if(barcoViking > childrenList[i]) {
        console.log('Acesso negado: '+childrenList[i])
    } else {
        console.log('Acesso permitido: '+childrenList[i])
    }

    i++;

}**//*/

/// Acesso liberado : VA


/// Acesso negado : VA




*/