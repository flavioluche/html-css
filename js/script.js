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
