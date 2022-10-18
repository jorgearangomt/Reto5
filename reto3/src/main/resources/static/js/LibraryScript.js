$("document").ready(function (){
    getLibs();
    //getCategory();
});
function getLibs(){
    $.ajax({
        url: "api/Lib/all",
        type: 'GET',
        dataType: 'json',
        success: function (libs){
            $("#libs").empty();
            for(i= 0; i< libs.length; i++){
                $("#libs").append("<option value='"+libs[i].id+"'>"+ libs[i].id+ " "+ libs[i].name+ " "+ libs[i].target+ " "+ libs[i].capacity+ " "+ libs[i].description+ " "+ libs[i].category+ "</option><button onclick='getDetailLibs("+libs[i].id+")'>Seleccionar</button><button onclick='deleteLibs("+libs[i].id+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getLibsInfo(){
    let data={
        id: $("#libsId").val(),
        name: $("#libsName").val(),
        target: $("#libsTarget").val(),
        capacity: $("#libsCapacity").val(),
        description: $("#libsDescription").val(),
        category:{
            id: $("#category option:selected").val()
        }
    }
    return data;
}
function cleanLibsInfo(){
    let data={
        id: $("#libsId").val(""),
        name: $("#libsName").val(""),
        target: $("#libsTarget").val(""),
        capacity: $("#libsCapacity").val(""),
        description: $("#libsDescription").val(""),
        category:{
            id: $("#category option:selected").val("")
        }
    }
    return data;
}
function saveLibs(){
    $.ajax({
        url: "api/Lib/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getLibsInfo()),
        success: function (libs) {
            getLibs();
            console.log(getLibsInfo());
            cleanLibsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailLibs(id){
    $.ajax({
        url: "api/Lib/all",
        type: 'GET',
        dataType: 'json',
        success: function (libs){
            let data= {
                id: $("#libsId").val(libs[0].id),
                name: $("#libsName").val(libs[0].name),
                target: $("#libsTarget").val(libs[0].target),
                capacity: $("#libsCapacity").val(libs[0].capacity),
                description: $("#libsDescription").val(libs[0].description),
                category: {
                    id: $("#category option:selected").val(libs[0].category)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteLibs(id){
    $.ajax({
        url: "api/lib/"+id,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: id}),
        success: function (libs){
            getLibs();
            console.log({id: id});
            cleanLibsInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}