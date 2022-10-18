$("document").ready(function (){
    getScore();
});
function getScore(){
    $.ajax({
        url: "api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (score){
            $("#score").empty();
            for(i= 0; i< score.length; i++){
                $("#score").append("<option value='"+score[i].idScore+"'>"+score[i].idScore+ " "+score[i].score+ "</option><button onclick='getDetailScore("+score[i].idScore+")'>Seleccionar</<button><button onclick='deleteScore("+score[i].idScore+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getScoreInfo(){
    let data={
        idScore: $("#scoreIdScore").val(),
        score: $("#scoreScore").val()
    }
    return data;
}
function cleanScoreInfo(){
    let data={
        idScore: $("#scoreIdScore").val(""),
        score: $("#scoreScore").val("")
    }
    return data;
}
function saveScore(){
    $.ajax({
        url: "api/Score/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getScoreInfo()),
        success: function (Score){
            getScore();
            console.log(getScoreInfo());
            cleanScoreInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailScore(idScore){
    $.ajax({
        url: "api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (score){
            let data={
                idScore: $("#scoreIdScore").val(score[0].idScore),
                score: $("#scoreScore").val(score[0].score)
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteScore(idScore){
    $.ajax({
        url: "api/Score/"+idScore,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: idScore}),
        success: function (score){
            getScore();
            console.log({id: idScore});
            cleanScoreInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}