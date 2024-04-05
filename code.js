

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
   let escala = document.querySelector('select').value;
   let valor = parseFloat(document.querySelector('#valor').value);
   let lista = document.querySelector("#lista");

 if (escala == 1) {
        let kelvin  = valor + 273.15;
        let fahrenheit = (valor * 9/5) +32;
      lista.innerHTML = '<li>Fahrenheit: ' + fahrenheit + '</li><br>' + '<li>Kelvin: ' + kelvin + '</li>';
     }
 if (escala == 2){
        let kelvin = (valor - 32) * 5/9 + 273.15;
        let celsius = (valor - 32) * 5/9;
      lista.innerHTML = '<li>Celsius: ' + celsius + '</li><br>' + '<li>Kelvin: ' + kelvin + '</li>';
    }
 if (escala == 3){
      let fahrenheit = (valor - 273.15) * 9/5 + 32;
     let celsius = valor - 273.15;
      lista.innerHTML = '<li>Fahrenheit: ' + fahrenheit + '</li><br>' + '<li>Celsius: ' + celsius + '</li>';
    }
});

document.getElementById('tema').addEventListener('click', function(event) {
    let body = document.querySelector("body");

    if (body.style.backgroundColor == 'white') {
        body.style.backgroundColor = 'black';
       
    } else {
        body.style.backgroundColor = 'white';
        
    }
});
