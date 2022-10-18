$("document").ready(function (){
    getCategory();
    console.log(getCategoryinfo());
    cleanCategoryInfo();
});
function getCategory(){
    $.ajax({
        url: "/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (category){
            $("#category").empty();
            for(i= 0; i< category.length; i++){
                $("#category").append("<option value='"+category[i].id+"'>"+ category[i].id+ " "+ category[i].name+ " "+ category[i].description+ "</option><button onclick='getDetailCategory("+category[i].id+")'>Seleccionar</button><button onclick='deleteCategory("+category[i].id+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getCategoryinfo(){
    let data={
        id: $("#categoryId").val(),
        name: $("#categoryName").val(),
        description: $("#categoryDescription").val()
    }
    return data;
}
function cleanCategoryInfo(){
    let data={
        id: $("#categoryId").val(""),
        name: $("#categoryName").val(""),
        description: $("#categoryDescription").val("")
    }
    return data;
}
function saveCategory(){
    $.ajax({
        url: "api/Category/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getCategoryinfo()),
        success: function (category){
            getCategory();
            console.log(getCategoryinfo());
            cleanCategoryInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailCategory(id){
    $.ajax({
        url: "api/Category/"+ id,
        type: 'GET',
        dataType: 'json',
        success: function (category){
            let data={
                id: $("#categoryId").val(category.id),
                name: $("#categoryName").val(category.name),
                description: $("#categoryDescription").val(category.description)

            }
            getCategory();
            console.log(getCategoryinfo());
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function updateCategory(){
    $.ajax({
        url: "api/Category/update",
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getCategoryinfo()),
        success: function (category){
            getCategory();
            console.log(getCategoryinfo());
            cleanCategoryInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteCategory(id){
    $.ajax({
        url: "api/Category/"+id,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({id: id}),
        success: function (category){
            getCategory();
            console.log({id: id});
            cleanCategoryInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}