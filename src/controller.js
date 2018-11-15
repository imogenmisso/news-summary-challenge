fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var body = data.response.content.fields.body;
    document.body.innerHTML = body;
  })
