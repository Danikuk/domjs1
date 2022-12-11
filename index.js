const uiObjekti = {
    message: document.getElementById('message'),
    provjeriKolikoImaSlovaElement: document.getElementById("provjerenoKolikoImaSlova"),
};

function provjeriKolikoImaSlova(event) {
    //provjeriti  ima li 10 slova u poruci
    event.preventDefault();
  
    if (uiObjekti.message.value.length > 10 ) {
      uiObjekti.provjeriKolikoImaSlovaElement.innerHTML = `<p>Poruka ima više od 10 slova!</p>`;
    } else {
      uiObjekti.provjeriKolikoImaSlovaElement.innerHTML = `<p>Poruka nema više od 10 slova!</p>`;
    }
  }