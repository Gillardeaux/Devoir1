function Exo1()
{
    //alert("exo1");
    $.ajax
    (
        {
            type:"get",
            url:"../PHP/getLesCategories.php",
            success:function(data)
            {
                $('#divCategories').empty();
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur sur les catégories");
            }
            
        }
    );
}


function AfficherLesServices()
{
    //alert("ça marche");
    $.ajax
    (
        {
            type:"get",
            url:"../PHP/getLesServices.php",
            data:"id="+$('#lstCategories').val(),
            success:function(data)
            {
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les services");
            }
            
        }
    );
}


function Exo2()
{
    //alert("exo2");
    $.ajax
    (
        {
            type:"get",
            url:"../PHP/getIdentifiant.php",
            data:"id="+$('#lstCategories').val(),
            success:function(data)
            {
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur d'identifiant");
            }
            
        }
    );
}

function AfficherLesDeals()
{
    $.ajax
    (
        {
            type:"get",
            url:"../PHP/getLesDeals.php",
            data:"id="+$('#btnRecherche').val(),
            success:function(data)
            {
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur avec les deals");
            }
            
        }
    );
}

