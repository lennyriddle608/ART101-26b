mood = ["tillhappy", "lettinggo", "ermactually", "tillleaving", "iknewit"]// track counts
let sceneCount = {
    tillhappy: 0,
    lettinggo: 0,
    ermatually: 0,
    tillleaving: 0,
    iknewit: 0
};

// show image
function showMoodImage(moodName) {
    // hide all images first
    $("img").hide();
    // show only the selected one
    $('body').append('<img class="img" src="imagess/'+moodName+'.jpg">');
};

// hide all images
$("img").hide();


function moodClick(moodName) {
    // increase count
    sceneCount[moodName]++;

    console.log(moodName + " clicked");
    console.log("Scenes with " + moodName + ": " + sceneCount[moodName]);

    // check if hit 5 scenes
    if (sceneCount[moodName] === 5) {
    let otherMoods = moods.filter(m => m !== moodName);

    let suggestion = otherMoods[0];
    let minCount = sceneCount[suggestion];

    for (let i = 1; i < otherMoods.length; i++) {
        let m = otherMoods[i];
        if (sceneCount[m] < minCount) {
            minCount = sceneCount[m];
            suggestion = m;
        };
    };

    $("#suggestion-box").html(
        "<p>You've been in scenes with " + moodName + " 5 times. Try being in scenes with <b>" 
        + suggestion + "</b> (" + minCount + " scenes).</p>"
    );
};

    // show image
    showMoodImage(moodName);

    // update count on page
    $("#count-" + moodName).remove();

    $("#" + moodName).append(
        "<p id='count-" + moodName + "'>Hangouts: " + hangoutCount[moodName] + "</p>"
    );
};

// friend clicks
$("#tillhappy").click(function () {
    console.log("Happy clicked");
    showMoodImage("tillhappy");
    moodClick("Happy");
});

$("#lettinggo").click(function () {
    console.log("Letting Go clicked");
    showMoodImage("lettinggo");
    moodClick("Letting Go");
});

$("#ermactually").click(function () {
    console.log("Hesitation clicked");
    showMoodImage("ermactually");
    moodClick("Hesitation");
});

$("#tillleaving").click(function () {
    console.log("Leaving clicked");
    showMoodImage("tillleaving");
    moodClick("Leaving");
}); 

$("#iknewit").click(function () {
    console.log("Expected clicked");
    showMoodImage("iknewit");
    moodClick("Expected");
});