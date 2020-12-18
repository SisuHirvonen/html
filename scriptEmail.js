
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  const nimi = document.querySelector('#nimi').value;
  console.log("nimikentän sisältö: " + nimi);
  const teksti = document.querySelector('#msg').value;
  console.log("viestikentän sisältö: " + teksti);
  const email = document.querySelector('#email').value;
  console.log("sähköpostikentän sisältö: " + email);
  var data = JSON.stringify({
    "EmailMsg": "Viestin lähettäjän sähköposti: " + email + ". Viestin sisältö: " + teksti, //Kirjoittaa sisällön
    "EmailTo": "sisu.hirvonen",
    "EmailName": nimi
  });
  xhr.send(data);
}