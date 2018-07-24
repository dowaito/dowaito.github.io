$(document).ready(function(){
    $("#submit").click(function(){
        var txt = $("#inText").val();
        $("#inText").val(txt.replace(/\n/g, "^"));
    });

    $("#clear").click(function(){
        var txt = $("#inText").val();
        $("#inText").val(txt.replace(/\^/g, "\n"));
    });
});

