function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Correct!");
    }
    else {
        $("#output").html("WRONG!!!!!!!!!!");
    }
}

$("#good-button").click(function () {
    askNumber(7);
});