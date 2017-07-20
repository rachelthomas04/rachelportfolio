$("#button_num").click(function() {
    var input = $("#input_num").val();
    var magicnumber = "6";


if (input === magicnumber){
    $("p").html("Congratulations!");
}
else if (input < magicnumber){
    $("p").html("Nope!");
}
else if (input > magicnumber){
    $("p").html("Nope! It's " + magicnumber);
}

});
