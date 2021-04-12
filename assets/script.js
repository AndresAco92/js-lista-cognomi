//Inserimento dati utente
var cognome_Utente = prompt('Scrivi il tuo cognome:');

//Dati database
var cognomi = [
  'Longobardi',
  'Trapani',
  'Accanfora',
  'Ballesi',
  'Colassante',
  'Flaminì'
] ; 

//Inserimento dati utente nel database
cognomi.push(cognome_Utente);

//Miglioramento Lettura alfabetica 
cognomi = cognomi.sort();

//Inserimento posizione lista 
for(var i = 0; i < cognomi.length; i++){
  var lista = cognomi[i];

  var cognome_prec = document.getElementById('cognomi_Utenti').innerHTML;
  document.getElementById('cognomi_Utenti').innerHTML = cognome_prec + '<li>' + lista + ' sei il n°' + (i+1) + '</li>';
}