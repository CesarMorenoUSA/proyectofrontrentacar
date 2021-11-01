function consultarGamas(){
    $.ajax({
        url:"http://129.151.122.175:8080/api/Gama/all",
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
        myTable+="<th>Nombre</th>";
        myTable+="<th>Descripción</th>";
        myTable+="<th>Carro</th>";
        myTable+="<th>Acción</th>";
        myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td><button onclick='actualizarGamas("+respuesta[i].idGama+")'>Actualizar</td>";
        myTable+="<td><button onclick='borrarGamas("+respuesta[i].idGama+")'>Borrar</td>";
        myTable+="</tr>";//para las funciones lo mismo -->idGama
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarGamas(){
    var nombre = document.getElementById("Gname").value, 
    descripcion= document.getElementById("Gdescription").value;
    console.log(nombre + descripcion);
    if(nombre.length==0||descripcion.length==0){
        alert("No sé aceptan campos vacios");
    }else{
        let regGama = {
            name:$("#Gname").val(),
            description:$("#Gdescription").val()
            };
              
        $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(regGama),
            url:"http://129.151.122.175:8080/api/Gama/save",
                
            success:function(response){
                console.log(response);
                console.log("Se guardo correctamente");
                alert("Se guardo correctamente");
                    window.location.reload()    
                },        
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()       
                alert("No se guardo correctamente");    
                }
            });    
        
    }    
}



function actualizarGamas(idElem){
    var nombre = document.getElementById("Gname").value, 
    descripcion= document.getElementById("Gdescription").value;
    console.log(nombre + descripcion);
    if(nombre.length==0||descripcion.length==0){
        alert("verifiqué que no hayan campos vacios");
    }else{ 
    let myData={
        idGama:idElem,//aqui le tiramos el id del back -->idGama
        name:$("#Gname").val(),
        description:$("#Gdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Gama/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#id").val("");
            $("#Gname").val("");
            $("#Gdescription").val("");
            consultarGamas();
            alert("Ha actualizado la gama del vehiculo")
        }
    });
    }
}
function borrarGamas(idElem){
    let myData={
        id:idElem
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Gama/"+idElem,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            consultarGamas();
            alert("Se ha Eliminado la Gama.");
        }
    });
}

// ---------------------- CARS ----------------------------//

function consultarCarros(){
    $.ajax({
        url:"http://129.151.122.175:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCarros(respuesta);
        }
    });
}

function pintarRespuestaCarros(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td><button onclick='actualizarCarros("+respuesta[i].idCar+")'>Actualizar</td>";
        myTable+="<td><button onclick='borrarCarros("+respuesta[i].idCar+")'>Borrar</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
    }

function guardarCarros(){
    var nombre = document.getElementById("Cname").value,
    marca = document.getElementById("Cbrand").value,
    anual = document.getElementById("Cyear").value,
    descripcion= document.getElementById("Cdescription").value;
    console.log(nombre + marca + anual + descripcion);
    if(nombre.length==0||marca.length==0||anual.length==0||descripcion.length==0){
        alert("No sé aceptan campos vacios");
    }else{
    let regCar = {
        name:$("#Cname").val(),
        brand:$("#Cbrand").val(),
        year:$("#Cyear").val(),
        description:$("#Cdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(regCar),
        url:"http://129.151.122.175:8080/api/Car/save",
        success:function(response) {
            console.log(response);
            console.log("Se ha registrado un nuevo carro");
            alert("Se ha registrado un nuevo carro");
            window.location.reload()    
        },
        
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("Algo fallo");
            }
        });
    }
}
function actualizarCarros(idElc){
    var nombre = document.getElementById("Cname").value,
    marca = document.getElementById("Cbrand").value,
    anual = document.getElementById("Cyear").value,
    descripcion= document.getElementById("Cdescription").value;
    console.log(nombre + marca + anual + descripcion);
    if(nombre.length==0||marca.length==0||anual.length==0||descripcion.length==0){
        alert("No sé aceptan campos vacios");
    }else{
    let myData={
        idCar:idElc,//aqui le tiramos el id del back -->idCar
        name:$("#Cname").val(),
        brand:$("#Cbrand").val(),
        year:$("#Cyear").val(),
        description:$("#Cdescription").val()
        };
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.122.175:8080/api/Car/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado2").empty();
                $("#id").val("");
                $("#Cname").val("");
                $("#Cbrand").val("");
                $("#year").val("");
                $("#Cdescription").val("");
                consultarCarros();
                alert("Ha actualizado la gama del vehiculo");
            }
        });
    }
}        
function borrarCarros(idElc){
    let myData={
        id:idElc
        };
    let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.122.175:8080/api/Car/"+idElc,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado2").empty();
                consultarCarros();
                alert("Se ha eliminado registro.");
            }
        });
    }


// ---------------------- CLIENTS ----------------------------//

function consultarClientes(){
    $.ajax({
        url:"http://129.151.122.175:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td><button onclick='actualizarClientes("+respuesta[i].idClient+")'>Actualizar</td>";
        myTable+="<td><button onclick='borrarClientes("+respuesta[i].idClient+")'>Borrar</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarClientes(){
    var email = document.getElementById("CLemail").value,
    clave = document.getElementById("CLpassword").value,
    nombre = document.getElementById("CLname").value,
    edad = document.getElementById("CLage").value;
    console.log(email + clave + nombre + edad);
    if(email.length==0||clave.length==0||nombre.length==0||edad.length==0){
        alert("No sé aceptan campos vacios");
    }else{
    let regCli = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(regCli),
        url:"http://129.151.122.175:8080/api/Client/save",
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se registro un cliente correctamente");
            window.location.reload()    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");    
        }
    });

    }
}
function actualizarClientes(idElCli){
    var email = document.getElementById("CLemail").value,
    clave = document.getElementById("CLpassword").value,
    nombre = document.getElementById("CLname").value,
    edad = document.getElementById("CLage").value;
    console.log(email + clave + nombre + edad);
    if(email.length==0||clave.length==0||nombre.length==0||edad.length==0){
        alert("No sé aceptan campos vacios");
    }else{
    let myData={
        idClient:idElCli,//aqui le tiramos el id del back -->
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()
        };
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.122.175:8080/api/Client/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado3").empty();
                $("#id").val("");
                $("#CLemail").val("");
                $("#CLpassword").val("");
                $("#CLname").val("");
                $("#CLage").val("");
                consultarClientes();
                alert("Ha actualizado el registro cliente");
            }
        });
    }
}        
function borrarClientes(idElCli){
    let myData={
        id:idElCli
        };
    let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.122.175:8080/api/Client/"+idElCli,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado3").empty();
                consultarClientes();
                alert("Se ha eliminado registro.");
            }
        });
    }
// ---------------------- MESSAGE ----------------------------//

function consultarMensajes(){
    $.ajax({
        url:"http://129.151.122.175:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td><button onclick='actualizarMensajes("+respuesta[i].idMessage+")'>Actualizar</td>";
        myTable+="<td><button onclick='borrarMensajes("+respuesta[i].idMessage+")'>Borrar</td>";
        myTable+="</tr>";//para las funciones lo mismo -->id bck
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarMensajes(){
    var texto = document.getElementById("Gname").value;
    console.log(texto);
    if(texto.length==0){
        alert("verifiqué que no hayan campos vacios");
    }else{ 
    let regMsj = {
        messageText:$("#Mmessagetext").val()
        };
      
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(regMsj),
        url:"http://129.151.122.175:8080/api/Message/save",
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");    
        }
    });    
    }
}
function actualizarMensajes(idElMs){
    var texto = document.getElementById("Gname").value;
    console.log(texto);
    if(texto.length==0){
        alert("verifiqué que no hayan campos vacios");
    }else{
    let myData={
        idMessage:idElMs,//aqui le tiramos el id del back -->
        messageText:$("#Mmessagetext").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#id").val("");
            $("#Mmessagetext").val("");
            consultarMensajes();
            alert("Ha actualizado el mensaje")
        }
    });
    }
}
function borrarMensajes(idElMs){
    let myData={
        id:idElMs
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Message/"+idElMs,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            consultarMensajes();
            alert("Se ha Eliminado el Mensaje.");
        }
    });
}

// ---------------------- RESERVATION ----------------------------//

function consultarReservas(){
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservas(respuesta);
        }
    });
}

function pintarRespuestaReservas(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td><button onclick='actualizarReservaciones("+respuesta[i].idReservation+")'>Actualizar</td>";
        myTable+="<td><button onclick='borrarReservaciones("+respuesta[i].idReservation+")'>Borrar</td>";
        myTable+="</tr>";//para las funciones lo mismo -->idReservation
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarReservas(){
    var inicio = document.getElementById("Rstartdate").value, 
    fin = document.getElementById("Rdevolutiondate").value;
    console.log(inicio + fin);
    if(inicio.length==0||fin.length==0){
        alert("verifiqué que no hayan campos vacios");
    }else{ 
    let regResv = {
        startDate:$("#Rstartdate").val(),
        devolutionDate:$("#Rdevolutiondate").val()
        };
      
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(regResv),
        url:"http://129.151.122.175:8080/api/Reservation/save",
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");    
        }
    });    
    }
}
function actualizarReservaciones(idElR){
    var inicio = document.getElementById("Rstartdate").value, 
    fin = document.getElementById("Rdevolutiondate").value;
    console.log(inicio + fin);
    if(inicio.length==0||fin.length==0){
        alert("verifiqué que no hayan campos vacios");
    }else{ 
    let myData={
        idReservation:idElR,//aqui le tiramos el id del back -->
        startDate:$("#Rstartdate").val(),
        devolutionDate:$("#Rdevolutiondate").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#id").val("");
            $("#Rstartdate").val("");
            $("#Rdevolutiondate").val("");
            consultarReservas();
            alert("Ha actualizado la fecha de la reserva")
        }
    });
    }
}
function borrarReservaciones(idElR){
    let myData={
        id:idElR
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.122.175:8080/api/Reservation/"+idElR,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            consultarReservas();
            alert("Se ha Eliminado la fecha de la reserva.");
        }
    });
}