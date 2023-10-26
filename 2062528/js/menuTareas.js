$(document).ready(function(){
    $("#btnFlechaArriba").on("click",function(){
	    $("footer").toggle();
        $("#btnFlechaArriba").css("display", "none");
    });
});

$(document).ready(function(){
    $("#btnFlechaAbajo").on("click",function(){
	    $("footer").toggle();
        $("#btnFlechaArriba").css("display", "initial");
    });
});
