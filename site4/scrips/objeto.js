
/*var nome = document.getElementById("titulo").innerHTML = 'Paulo';

var lista = document.getElementsByTagName('li');

for (var i = 0; i < lista.length; i++){
	lista[i].innerHTML =  i +1 + " "+lista[i].innerHTML;
}

for(var i in lista) {
	lista[i].innerHTML= parseFloat(i) + 1 + ' ' +lista.innerHTML
}*/

$('li').each(function (index,val){
	$(val).text(index + 1 + ' ' + $(val).text())
}
)
/*$('.send').click(function click(){
	var value = $ ('input').val();
	$('ul').append('<li>' + value+'</li>');
	$('input').val('');

})*/

$('form').submit(function(evt){
    var value = 'As principais notícias do dia e da semana estão agora na nossa capa! Jornal 02/11/2012 O Globo, a fonte de informação mais completa do Brasil'


    console.log(value.match(/\d{2}\/\d{2}\/\d{4}/igm))


    // $('ul').append('<li>'+value+'</li>');
    // $('input').val('');
    return false;
})
    
	