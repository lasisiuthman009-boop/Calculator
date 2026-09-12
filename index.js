

function appendDisplay(input){
    const answer = $("#result").val()
    $("#result").val(answer + input) 
}

function clearDisplay(){
    $("#result").val("")
}

function calculate(){
    $("#result").val(eval($("#result").val()))
}

