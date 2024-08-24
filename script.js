// Passar o slide automaticamente a cada 3,5s
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 3500)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


var dataPrincipal = moment("Jun 22, 2022 14:30:00");
var x = setInterval(function() {
    var dataHoje = moment();
    var diferenca = moment.duration(dataHoje.diff(dataPrincipal));

    var anos = diferenca.years();
    var meses = diferenca.months();
    var dias = diferenca.days();
    var horas = diferenca.hours();
    var minutos = diferenca.minutes();
    var segundos = diferenca.seconds();

    document.getElementById("anos").innerHTML = anos;
    document.getElementById("meses").innerHTML = meses;
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
   
}, 1000);