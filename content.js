/**
 * Created by session1 on 9/28/15.
 */
var defeat = true;
var youHit = Math.floor(Math.random() * 1);
var damageThisRound = Math.floor(Math.random()*3 + 1);
var totalDamage = 0;
while (defeat) {
    defeat = false;
}
var defeat = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*4 + 1);
var totalDamage = 0;
while (defeat) {
    if (youHit = 1) {
        console.log("You did it! You defeated the Keeper of Shadows!");
    }
    else {
        console.log("The Keeper of Shadows defeated you.");
    }
    defeat = false;
}

var defeat = true;
var youHit = Math.floor(Math.random() * 3);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = totalDamage + damageThisRound;
while (defeat) {
    if (youHit = 2) {
        console.log("You did it! You defeated the Keeper of Shadows!");
        if (totalDamage >= 5) {
            console.log("Your partner, Robyn, defeated the Keeper of Shadows.");
            defeat = false;
        }
        else {
            youHit = Math.floor(Math.random() * 3);
        }
    }
    else {
        console.log("The Keeper of Shadows defeated you.");
    }
    defeat = false;
}

