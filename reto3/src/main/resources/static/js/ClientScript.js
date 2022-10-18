$("document").ready(function (){
    getClients();
});
function getClients(){
    $.ajax({
        url: "api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function(clients){
            $("#clients").empty();
            for(i= 0; i< clients.length; i++){
                $("#clients").append("<option value='"+clients[i].idClient+"'>"+clients[i].idClient+ " "+ clients[i].name+ " "+ clients[i].age+ " "+ clients[i].email+ "</option><br><button class='btn2' onclick='getDetailClients("+clients[i].idClient+")'>Seleccionar</button>&nbsp<button class='btn2' onclick='deleteClients("+clients[i].idClient+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getClientsInfo(){
    let data={
        idClient: $("#clientsIdClient").val(),
        email: $("#clientsEmail").val(),
        name: $("#clientsName").val(),
        age: $("#clientsAge").val(),
        password: $("#clientsPassword").val()
    }
    return data;
}
function cleanClientsInfo(){
    let data={
        idClient: $("#clientsIdClient").val(""),
        email: $("#clientsEmail").val(""),
        name: $("#clientsName").val(""),
        age: $("#clientsAge").val(""),
        password: $("#clientsPassword").val("")
    }
    return data;
}
function saveClients(){
    $.ajax({
        url: "api/Client/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getClientsInfo()),
        success: function (clients){
            getClients();
            console.log(getClientsInfo());
            cleanClientsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailClients(idClient){
    $.ajax({
        url: "api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (clients){
            let data={
                idClient: $("#clientsIdClient").val(clients[0].idClient),
                email: $("#clientsEmail").val(clients[0].email),
                name: $("#clientsName").val(clients[0].name),
                age: $("#clientsAge").val(clients[0].age),
                password: $("#clientsPassword").val(clients[0].password)
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteClients(idClient){
    $.ajax({
        url: "api/Client/"+idClient,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: idClient}),
        success: function (clients){
            getClients();
            console.log({id: idClient});
            cleanClientsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}