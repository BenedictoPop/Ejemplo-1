var personLIst=[];
var grado;
var seccion;

class person{
    constructor(a,b,c, d, e){
        this.name=a;
        this.lastname=b;
        this.id=c;
        this.grade=d;
        this.section=e;
    }
}

function fillData(){

    var persona=new person("Benedicto", "Pop Cucul", "per-01", "2do. Básico", "A");
    personLIst.push(persona);

    var persona=new person("Marlon", "Amador", "per-02","3ero. Básico", "C");
    personLIst.push(persona);

    var persona=new person("Melvin", "Tomás", "per-03","2do. Básico", "D");
    personLIst.push(persona);

    var persona=new person("Francisco", "Omar", "per-04","1ero. Básico", "A");
    personLIst.push(persona);

    var persona=new person("Danilo", "Ortiz", "per-05","1ero. Básico", "E");
    personLIst.push(persona);

    var persona=new person("Mateo", "Yos", "per-06","3ero. Básico", "D");
    personLIst.push(persona);

    var persona=new person("Brayan", "Lemus", "per-07","2do. Básico", "E");
    personLIst.push(persona);

    var persona=new person("Martín", "Cebolla", "per-08","1ero. Básico", "D");
    personLIst.push(persona);

    var persona=new person("Jhony", "Cruz", "per-09","1ero. Básico", "D");
    personLIst.push(persona);

    var persona=new person("Axel", "Tec", "per-10","3ero. Básico", "E");
    personLIst.push(persona);

    var persona=new person("Andy", "Guzman", "per-11","2do. Básico", "A");
    personLIst.push(persona);

    var persona=new person("Miguel", "Cua", "per-12","2do. Básico", "B");
    personLIst.push(persona);

    var persona=new person("Jerson", "Garcia", "per-13","2do. Básico", "A");
    personLIst.push(persona);

    var persona=new person("Lorenzo", "Calicio", "per-14","3ero. Básico", "B");
    personLIst.push(persona);

    var persona=new person("Sandi", "Miguelito", "per-15","3ero. Básico", "C");
    personLIst.push(persona);

    var persona=new person("Omar", "Cruz", "per-16","2do. Básico", "E");
    personLIst.push(persona);

    var persona=new person("Gervin", "Omar", "per-17","3ero. Básico", "A");
    personLIst.push(persona);

    var persona=new person("Francisco", "Perez", "per-18","1ero. Básico", "B");
    personLIst.push(persona);

    var persona=new person("Juan", "Bautista", "per-19","2do. Básico", "C");
    personLIst.push(persona);

    var persona=new person("Samuel", "Sebastian", "per-20","1ero. Básico", "C");
    personLIst.push(persona);

    sessionStorage.setItem('list', JSON.stringify(personLIst));
}

function saveData(){
    var table, thead, tbody;

    table="<table border=2>";
    thead="<thead><tr><th>NAME</th><th>LASTNAME</th><th>ID</th><th>GRADE</th><th>SECTION</th></tr></thead>";
    table+=thead;
    tbody="<tbody>";
    personLIst.forEach(function(i){
            tbody+="<tr><td>"+i.name+"</td><td>"+i.lastname+"</td><td>"+i.id+"</td><td>"+i.grade+"</td><td>"+i.section+"</td></tr>";
    });

    table+=tbody;
    tbody+="</tbody>";
    alert("Dato enviado a la tabla");

    document.getElementById('viewTable').innerHTML=table;
}

function   loadDetails(element){ 
    sessionStorage.setItem('id',element.value);
    window.open("Details.html","_self");
}

function Aplication(){
    var filter=sessionStorage.getItem('id');
    var a, b, c, d, e;
    personLIst=JSON.parse(sessionStorage.getItem('list'));
    personLIst.forEach(function(i){
        if(i.id==filter){
            a=i.id;
            b=i.name;
            c=i.lastname;
            d=i.grade;
            e=i.section;
        }
    });

    document.getElementById('inputId').value=a;
    document.getElementById('inputName').value=b;
    document.getElementById('inputLastname').value=c;
    document.getElementById('inputGrade').value=d;
    document.getElementById('inputSection').value=e;

}


function ApllyFilter(){
    var table, thead, tbody;

    table="<table border=2>";
    thead="<thead><tr><th>NAME</th><th>LASTNAME</th></th><th>ID</th><th>GRADE</th><th>SECTION</th><th>OPTION</th></tr></thead>";
    table+=thead;
    tbody="<tbody>";
    personLIst.forEach(function(i){
        if(i.grade==grado){
            if(i.section==seccion){
                tbody+="<tr><td>"+i.name+"</td><td>"+i.lastname+"</td><td>"+i.id+"</td><td>"+i.grade+"</td><td>"+i.section+"</td><td><button onclick='loadDetails(this)' value="+i.id+">Details</button></tr>";
            }
        }
    })

    table+=tbody;
    tbody+="</tbody>";
    table+="</table>";

    document.getElementById('viewTable').innerHTML=table;
  
}
function grade(element){
    grado=element.value;
}

function section(show){
    seccion=show.value;
}

function Confirmar(){

    var usuario, clave;

    usuario = document.getElementById('inputUser').value;
    clave = document.getElementById('inputPassword').value;

    if(usuario=="Bene"){
        if(clave=="$22#Bene#02"){
            window.open("index.html", "_self");
        }else{
            alert("Error en clave");
        }
    }else{
        alert("Error en usuaio");
    }
}