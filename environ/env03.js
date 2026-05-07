moods = ["tillhappy", "lettinggo", "ermactually", "tillleaving", "iknewit"]// track counts
let hangoutCount = {
    tillhappy: 0,
    lettinggo: 0,
    ermactually: 0,
    tillleaving: 0,
    iknewit: 0
};

// show image
function showMoodsImage(moodsName) {
    // hide all images first
    $("main-section").hide();
    // show only the selected one
    $("body").append("<img class='main-section' src='" + moodsName + ".jpg'>");
}

// hide all images
$("main-section").hide();

// mood clicks
$("#tillhappy").click(function () {
    console.log("tillhappy clicked");
    showMoodsImage("tillhappy");
    moodsClick("tillhappy");
});

$("#lettinggo").click(function () {
    console.log("lettinggo clicked");
    showMoodsImage("lettinggo");
    moodsClick("lettinggo");
});

$("#ermactually").click(function () {
    console.log("ermactually clicked");
    showMoodsImage("ermactually");
    moodsClick("ermactually");
});

$("#tillleaving").click(function () {
    console.log("tillleaving clicked");
    showMoodsImage("tillleaving");
    moodsClick("tillleaving");
});

$("#iknewit").click(function () {
    console.log("iknewit clicked");
    showMoodsImage("iknewit");
    moodsClick("iknewit");
});

// ivan = ["ivantillbabies", "oneshot", "twoshot", "threeshot", "broimdead", "dead"]// track counts
// let shotsCount = {
// ivantillbabies: 0,
// oneshot: 0,
// twoshot: 0,
// threeshot: 0
// broimdead: 0,
// dead: 0
// };
//      function ivanClick(ivanName) {
//     // increase count
//     shotsCount[ivanName]++;

//     console.log(ivanName + " clicked");
//     console.log("Shots with " + ivanName + ": " + shotsCount[ivanName]);

//     // check if hit 5 hangouts
//     if (clickCount[ivanName] === 5) {
//     function showMoodsImage(moodsName)
//     let otherFriends = ivan.filter(i => i !== ivanName);

//     let suggestion = otherFriends[0];
//     let minCount = shotsCount[suggestion];

//     for (let i = 1; i < otherIvan.length; i++) {
//         let i = otherIvan[i];
//         if (hangoutCount[i] < minCount) {
//             minCount = hangoutCount[i];
//             suggestion = i;
//         }
//     }

//     $("#suggestion-box").html(
//         "<p>You've hung out with " + friendName + " 5 times. Try hanging out with <b>" 
//         + suggestion + "</b> (" + minCount + " hangouts).</p>"
//     );
// }

//     // show image
//     showivanImage(ivanName);

//     // update count on page
//     $("#count-" + ivanName).remove();

//     $("#" + ivanName).append(
//         "<p id='count-" + ivanName + "'>Shots: " + shotsCount[ivanName] + "</p>"
//     );
// }

