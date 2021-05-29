window.addEventListener("load", cargar);


function cargar() 
{
    SetYears("date-dropdown");
    console.log();("funciona uwu");
    var peticionHttp = new XMLHttpRequest();
    EjecutarGet(peticionHttp);
    peticionHttp.open("GET", "http://localhost:3000/autos", true);
    peticionHttp.send();
}

function EjecutarGet(peticion) 
{
    peticion.onreadystatechange = function() 
    {
        if (peticion.readyState == 4 && peticion.status == 200) 
        {
            
            var listaAutos = JSON.parse(peticion.responseText);
            for (var index = 0; index < listaAutos.length; index++) 
            {
                console.log(listaAutos[index].make,listaAutos[index].model,listaAutos[index].year);
                AddElement(listaAutos[index].make, listaAutos[index].model, listaAutos[index].year);
                
            }
        }
    };
}

function AddElement(marca, modelo, año) 
{
    var cuerpo = GetId("TablaBody");
    var row = document.createElement("tr");
    var tdMarca = document.createElement("td");
    var tdModelo = document.createElement("td");
    var tdYear = document.createElement("td");
    var textMarca = document.createTextNode(marca);
    var textModelo = document.createTextNode(modelo);
    var textYear = document.createElement("select");

    cuerpo.appendChild(row);
    row.appendChild(tdMarca);
    tdMarca.appendChild(textMarca);
    row.appendChild(tdModelo);
    tdModelo.appendChild(textModelo);
    row.appendChild(tdYear);
    tdYear.appendChild(textYear);
    textYear.id = Math.random().toString();
    SetYears(textYear.id);
    SelectYear(textYear.id, año);
}

function SetInputs() 
{
    
}
function SetYears(id) 
{
    var dateDropdown  = GetId(id);
    var currentYear = 2020;    
    var earliestYear = 2000;     
    while (currentYear >= earliestYear) {      
        var dateOption = document.createElement('option');          
        dateOption.text = currentYear;      
        dateOption.value = currentYear;        
        dateDropdown.add(dateOption);      
        currentYear -= 1;    
    }
}
function SelectYear(id, valueToSelect) 
{
    var element = document.getElementById(id);
    element.value = valueToSelect;
}
function GetId(object) 
{
    if(document.getElementById(object) != null)
    {
        return document.getElementById(object);
    }
}