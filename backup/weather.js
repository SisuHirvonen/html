//'https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&Deviceid=1e0040001447393035313136&amount=10'

var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function() {

    var status = xhr.status;

    if (status == 200) {
       callback(null, xhr.response);
    } else {
        callback(status);
    }
  };
  xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=1e0040001447393035313136&amount=10', function(err, data){
  let taulukko = `<table width="85%" align="center" style="border=1px solid black"><tr><td>Ilmankosteus</td><td>Lämpötila tuntuu</td><td>Lämpötila</td><td>Höyrystymispiste</td><td>Valoisuus</td></tr>`;
  const historia = data.map(function(mittaus){

    
      taulukko = taulukko + `</td><td>${mittaus.Hum}</td><td>${mittaus.HI}</td><td>${mittaus.Temp}</td><td>${mittaus.DP}</td><td>${mittaus.Light}</td></tr>`; 

  });  
  taulukko = taulukko + `</table>`;
  document.querySelector('.taulukko').innerHTML = taulukko;
});