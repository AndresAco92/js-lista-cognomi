var cognome_Utente = prompt('Scrivi il tuo cognome:');

var cognomi = [
  'Longobardi',
  'Trapani',
  'Accanfora',
  'Ballesi',
  'Colassante',
  'Flaminì'
] ;

cognomi.push(cognome_Utente);

cognomi = cognomi.sort();

for(var i = 0; i < cognomi.length; i++){
  var lista = cognomi[i];
  var lista_prec = document.getElementById('cognomi_Utenti') .innerHTML;
  document.getElementById('cognomi_Utenti').innerHTML = lista_prec + '<li>' + lista + '</li>';
}


console.log(cognomi.sort());
