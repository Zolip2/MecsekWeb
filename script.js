
$("document").ready(function(){
    $(".menuButton").css("display", "none");
})


$("#menu").click(function(){
    $("#menu").addClass('menuClick')
    $("#menu").removeClass('menu')
    $(".menuButton").css("display", "block");
})