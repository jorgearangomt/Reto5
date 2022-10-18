$("document").ready(function (){
    getMessages();
    getLibs();
    getClients();
});
function getMessages(){
    $.ajax({
        url: "api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (messages){
            $("#messages").empty();
            for(i= 0; i< messages.length; i++){
                $("#messages").append("<option value='"+messages[i].idMessage+"'>"+ messages[i].idMessage+ " "+ messages[i].messageText+ " "+ messages[i].libs+ " "+messages[i].clients+ "</option><button onclick='getDetailMessages("+messages[i].idMessage+")'>Seleccionar</<button><button onclick='deleteMessages("+messages[i].idMessage+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getMessagesInfo(){
    let data={
        idMessage: $("#messagesIdMessage").val(),
        messageText: $("#messagesMessageText").val(),
        libs:{
            id: $("#libs option:selected").val()
        },
        clients:{
            idClient: $("#clients option:selected").val()
        }
    }
    return data;
}
function cleanMessagesInfo(){
    let data={
        idMessage: $("#messagesIdMessage").val(""),
        messageText: $("#messagesMessageText").val(""),
        libs:{
            id: $("#libs option:selected").val("")
        },
        clients:{
            id: $("#clients option:selected").val("")
        }
    }
    return data;
}
function saveMessages(){
    $.ajax({
        url: "api/Message/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getMessagesInfo()),
        success: function (messages){
            getMessages();
            console.log(getMessagesInfo());
            cleanMessagesInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailMessages(idMessage){
    $.ajax({
        url: "api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (messages){
            let data={
                idMessage: $("#messagesIdMessage").val(messages[0].idMessage),
                messageText: $("#messagesMessageText").val(messages[0].messageText),
                libs:{
                    id: $("#libs option:selected").val(messages[0].libs)
                },
                clients:{
                    id: $("#clients option:selected").val(messages[0].clients)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteMessages(idMessage){
    $.ajax({
        url: "api/Message/"+idMessage,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: idMessage}),
        success: function (messages){
            getMessages();
            console.log({id: idMessage});
            cleanMessagesInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}