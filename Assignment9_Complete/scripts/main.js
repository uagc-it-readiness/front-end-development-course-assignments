/**Part 1 */
var myName = "Daniel Worthy";
document.getElementById('partOne').innerHTML = myName;


/**Part 2 */
var foo = "This is an integer";
foo = "This is not an integer";
document.getElementById('partTwo').innerHTML = foo;


/** Part 3 */
var partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;
document.getElementById('partThree').innerHTML = partThree;



/**Part 4 */
var fName = 'John';
var lName = 'Doe';

var fullName;
fullName = fName + ' ' + lName;

document.getElementById('partFour').innerHTML = fullName;



/**Part 5 */
var myHtml = '';

myHtml += "<h2>Title</h2>";
myHtml += "<p>Lorem ipsum dolor</p>";
myHtml += "<h3>Pellentesque habitant morbi</h3>";
myHtml += "<p>Morbi in sem quis dui placerat ornare. </p>";

document.getElementById('partFive').innerHTML = myHtml;



/**Part 5 */
var part6Number = getRandomNumber();
var message = '';
if (part6Number > 50) {
  message = "Above 50";
} else {
  message = "Below or equal to 50";
}

document.getElementById('part6Result').innerHTML = message;
document.getElementById('part6Number').innerHTML = part6Number;


/**
 *      Part 7
 */
var part7Number = getRandomNumber();
var message2 = '';

if (part7Number < 25) {
  message2 = 'Below 25';
} else if (part7Number >= 25 && part7Number < 50) {
  message2 = 'Between 25 and 50';
} else if (part7Number >= 50 && part7Number < 75) {
  message2 = 'Between 50 and 75';
} else {
  message2 = 'Above 75';
}
document.getElementById('part7Result').innerHTML = message2;
document.getElementById('part7Number').innerHTML = part7Number;


/**
 *  BONUS
 ** */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var i = 0; i < 11; i++){
  console.log(i);
}

document.querySelector('.bonus').style.backgroundColor = 'blue';


////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}