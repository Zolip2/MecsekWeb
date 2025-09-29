
/*$("document").ready(function(){
    $(".menuButton").css("display", "none");
    $(".menuButton").css("opacity", "0");
})


$("#menu").click(function(){
    $("#menu").addClass('menuClick')
    $("#menu").removeClass('menu')
    $(".menuButton").css("display", "block");
    setTimeout(function(){
        $(".menuButton").css("opacity", "1");
    }, 500)
    
})*/


$.ajax({
    url: 'index.php',
    method: 'GET',
    datatype: "text",
    success: function(data){
        $('#test').text(data);
    },
    error: function(){
        $("#test").text("Error loading text.");
    }
})