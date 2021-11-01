function reporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){
    let myTable="<table>";    
        myTable+="<tr>";
        myTable+="<th>Completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>Canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";//para las funciones lo mismo -->idGama
        myTable+="</table>";
    $("#statusR").html(myTable);
}
function reporteFecha(){
    var fi=document.getElementById("Rstartdate").value,
    fc=document.getElementById("Rdevolutiondate").value;
    console.log(fi+fc);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/report-dates/"+fi+"/"+fc,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<th>Fechas: </th>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#dateR").html(myTable);
}

function reporteCliente(){
    console.log("test");
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta);
        }
    });
}
function pintarRespuestaClient(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<th>Fechas: </th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#clientR").html(myTable);
}