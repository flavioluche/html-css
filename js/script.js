/* 
*Basics of Javascript
* - Variables
* - Basic operations
*/

//Does Mark has a bigger BMI than John?
var markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi, bmiResult

markHeight = 1.80;
markMass = 83;

johnHeight = 1.73;
johnMass = 62;

markBmi = markMass / (markHeight * markHeight);
console.log('Mark\'s BMI ' + markBmi);

johnBmi = johnMass / (johnHeight * johnHeight);
console.log('John\'s BMI ' + johnBmi);

bmiResult = markBmi > johnBmi;

console.log('Does Mark has a bigger BMI than John? ' + bmiResult);


//Which teams win in average

var johnGameOne, johnGameTwo, johnGameThree

johnGameOne = 89;

johnGameTwo = 120;

johnGameThree = 103; //first test 103



var mikeGameOne, mikeGameTwo, mikeGameThree

mikeGameOne = 116;

mikeGameTwo = 94;

mikeGameThree = 123;


/* //forcing a draw

mikeGameOne = 89;

mikeGameTwo = 120;

mikeGameThree = 200; //first test 103
 */
teamJohnAvg = (johnGameOne + johnGameTwo + johnGameThree) / 3;

teamMikeAvg = (mikeGameOne + mikeGameTwo + mikeGameThree) / 3;

/* //Using if else

if (teamJohnAvg > teamMikeAvg){
    console.log('John\'s Team wins with an win average of ' + teamJohnAvg + ' over ' + teamMikeAvg +  ' of Mike\'s team ');
} else if (teamMikeAvg > teamJohnAvg) {
    console.log('Mike\'s Team wins with an win average of ' + teamMikeAvg + ' over ' + teamJohnAvg + ' of John\'s team ');
} else {
    console.log('Mike\'s Team and John\'s team are with the same wins average of ' + teamMikeAvg);
} */



//using switch case

switch(true){
    case teamJohnAvg > teamMikeAvg:
        console.log('John\'s Team wins with an win average of ' + teamJohnAvg + ' over ' + teamMikeAvg +  ' of Mike\'s team ');
        break;
    case teamJohnAvg < teamMikeAvg:
        console.log('Mike\'s Team wins with an win average of ' + teamMikeAvg + ' over ' + teamJohnAvg + ' of John\'s team ');
        break;
    case teamJohnAvg = teamMikeAvg:
        console.log('Mike\'s Team and John\'s team are with the same wins average of ' + teamMikeAvg);
        break;

}