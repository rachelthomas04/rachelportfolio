$("#wrapper").hide();

$("#guess_button").click(function() {
    var input = $("#inputbox").val();
    var magicnumber = "panda";


if (input === magicnumber){$("#wrapper").show();
    $("p").html("Congratulations!"); 
    $("#login").hide();
}

else if (input !== magicnumber){
    $("p").html("Nope! It's " + magicnumber);
}




});
    
