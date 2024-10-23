// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno-form

// Descrizione:
// Scrivere un programma che chieda all'utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
// image.png

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const myForm = document.getElementById("ticket-form");
const passengerName = document.getElementById("passenger-name");
const ticketType = document.getElementById("ticket-type");
const ticketPrice = document.getElementById("ticket-price");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); //Evita l'invio del form

  //Lettura dati inseriti dall'utente
  const ageCategory = document.getElementById("input-select").value;
  const userName = document.getElementById("inputName").value;
  const userKilometers = parseInt(
    document.getElementById("inputKilometers")
  ).value;

  //Calcolo del prezzo
  let basePrice = userKilometers * 0.21;
  let ticketDescription;
  let finalPrice;

  // Gestione dati form
  console.log("Form inviato senza ricaricare la pagina!");

  if (ageCategory === "under-eighteen") {
    console.log("under-eighteen");
    ticketDescription = "Biglietto ridotto Under 18";
    finalPrice = basePrice * 0.8; // Sconto 20%
  } else if (ageCategory === "eighteen-sixtyfive") {
    console.log("18-65");
    ticketDescription = "Biglietto standard";
    finalPrice = basePrice; //Non scontato
  } else if (ageCategory === "over-sixtyfive") {
    console.log("over-65");
    ticketDescription = "Biglietto ridotto Over 65";
    finalPrice = basePrice * 0.6; // Sconto 40%
  }

  //inserimento dati in card
  passengerName.textContent = userName;
  ticketType.textContent = ticketDescription;
  ticketPrice.textContent = finalPrice.toFixed(2) + "€";
});

resetButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Cancella i valori dei campi
  myForm.reset();
  console.log("Form resettato senza ricaricare la pagina!");
});
