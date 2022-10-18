$("document").ready(function (){
    getReservations();
    getLibs();
    getClients();
    getScore();
});
function getReservations(){
    $.ajax({
        url: "api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (reservations){
            $("#reservations").empty();
            for(i= 0; i< reservations.length; i++){
                $("#reservations").append("<option value='"+reservations[i].idReservation+"'>"+ reservations[i].idReservation+ " "+reservations[i].startDate+ " "+reservations[i].devolutionDate+ " "+ reservations[i].status+ " "+ reservations[i].libs+ " "+ reservations[i].clients+ " "+ reservations[i].scores+ "</option><button onclick='getDetailReservations("+reservations[i].idReservation+")'>Seleccionar</<button><button onclick='deleteReservations("+reservations[i].idReservation+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getReservationsInfo(){
    let data={
        idReservation: $("#reservationsIdReservation").val(),
        startDate: $("#reservationsStartDate").val(),
        devolutionDate: $("#reservationsDevolutionDate").val(),
        status: $("#reservationsStatus").val(),
        libs:{
            id: $("#libs option:selected").val()
        },
        clients:{
            id: $("#clients option:selected").val()
        },
        scores:{
            id: $("#scores option:selected").val()
        }
    }
    return data;
}
function cleanReservationsInfo(){
    let data={
        idReservation: $("#reservationsIdReservation").val(""),
        startDate: $("#reservationsStartDate").val(""),
        devolutionDate: $("#reservationsDevolutionDate").val(""),
        status: $("#reservationsStatus").val(""),
        libs:{
            id: $("#libs option:selected").val("")
        },
        clients:{
            id: $("#clients option:selected").val("")
        },
        scores:{
            id: $("#scores option:selected").val("")
        }
    }
    return data;
}
function saveReservations(){
    $.ajax({
        url: "api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getReservationsInfo()),
        success: function (meservations){
            getReservations();
            console.log(getReservationsInfo());
            cleanReservationsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailReservations(idReservation){
    $.ajax({
        url: "api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (reservations){
            let data={
                idReservation: $("#reservationsIdReservation").val(reservations[0].idReservation),
                startDate: $("#reservationsStartDate").val(reservations[0].startDate),
                devolutionDate: $("#reservationsDevolutionDate").val(reservations[0].devolutionDate),
                status: $("#reservationsStatus").val(reservations[0].status),
                libs:{
                    id: $("#libs option:selected").val(reservations[0].libs)
                },
                clients:{
                    id: $("#clients option:selected").val(reservations[0].clients)
                },
                scores:{
                    id: $("#scores option:selected").val(reservations[0].scores)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteReservations(idReservation){
    $.ajax({
        url: "api/Reservation/"+idReservation,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: idReservation}),
        success: function (reservations){
            getReservations();
            console.log({id: idReservation});
            cleanReservationsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}