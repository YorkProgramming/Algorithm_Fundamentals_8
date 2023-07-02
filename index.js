//1. 
//Gaming Fun(damentals)

/* 
1. Create function rollOne() to return a randomly selected integer 
between 1 and 6 (inclusive).   

2. Second, create a function playFives(num), which should call rollOne()
multiple times – ‘num’ times, in fact, where ‘num’ is input parameter to
playFives(num). Each time, it should print the value rollOne() returns,
and if that return value is 5, also print “That’s good luck!”

3. Third, create a new function named playStatistics(), which should call
rollOne() eight times (but not print anything after each call). After the
last of these eight calls, it should print out the lowest and highest
values that it received from rollOne, among those eight calls.

4. Fourth, make a copy of playStatistics and add code to make playStatistics2(),
so that at the end (in addition to printing high/low rolls), it also prints
the total sum of all eight rolls.

5. Fifth, copy playStatistics2 and add code to it to make playStatistics3(num),
so that it will roll as many times as you want, instead of always doing this
eight times.

6. Finally, make a copy of playStatistics3 and change it to create playStatistics4(num),
so that at the end instead of the total sum, it prints the average roll.
 */

function rollOne() {
    return Math.floor(Math.random() * 6 + 1);
}

console.log(rollOne());


function playFives(num) {
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        console.log(roll);
        if (roll == 5) {
            console.log("That's good luck!");
        }
    }
}

console.log(playFives(5));



function playStatistics() {
    var min = 6;
    var max = 1;
    for (var i = 0; i < 8; i++) {
        var roll = rollOne();
        if (roll < min) {
            min = roll;
        }
        if (roll > max) {
            max = roll;
        }
    }
    console.log("Min: " + min + ", Max: " + max);
}

console.log(playStatistics());




function playStatistics2() {
    var min = 6;
    var max = 1;
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        }
        if (roll > max) {
            max = roll;
        }
    }
    console.log("Min: " + min + ", Max: " + max + ", Sum: " + sum);
}

console.log(playStatistics2());



function playStatistics3(num) {
    var min = 6;
    var max = 1;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        }
        if (roll > max) {
            max = roll;
        }
    }
    console.log("Min: " + min + ", Max: " + max + ", Sum: " + sum);
}

console.log(playStatistics3(10));




function playStatistics4(num) {
    var min = 6;
    var max = 1;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        sum += roll;
        if (roll < min) {
            min = roll;
        }
        if (roll > max) {
            max = roll;
        }
    }
    console.log("Min: " + min + ", Max: " + max + ", Avg: " + sum / num);
}

console.log(playStatistics4(10));

//##############################################################################################

//2. Statistics Until Doubles

/*
Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly
returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get
a value twice in a row. Display number of rolls, min, max, and average.
*/

function rollOne() {
    return Math.floor(Math.random() * 20 + 1);
}

console.log(rollOne());


function statisticsUntilDoubles() {
    var min = 20;
    var max = 1;
    var sum = 0;
    var count = 0;
    var roll = rollOne();
    while (roll != rollOne()) {
        count++;
        sum += roll;
        if (roll < min) {
            min = roll;
        }
        if (roll > max) {
            max = roll;
        }
        roll = rollOne();
    }
    console.log("Min: " + min + ", Max: " + max + ", Avg: " + sum / count);
}

console.log(statisticsUntilDoubles());

//#############################################################################################

//3. Claire is Where?

/*
On New Year’s Eve, have fun but don’t forget your way home! 
For this challenge create four functions (reset, moveBy, xLocation and yLocation) 
to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). 
The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. 
Finally, xLocation() and yLocation()return how far Claire is from home, 
in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), 
and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.
*/

var x = 0;
var y = 0;

function reset() {
    x = 0;
    y = 0;
}

function moveBy(xOffset, yOffset) {
    x += xOffset;
    y += yOffset;
}

function xLocation() {
    return x;
}

function yLocation() {
    return y;
}

reset();
moveBy(1, -2);
moveBy(3, 1);
console.log(xLocation());
console.log(yLocation());

//#############################################################################################

//4. Date, on a Deserted Island

/*
After a particularly fabulous New Year’s Eve party to end 2016, 
Eduardo wakes to find himself stranded on a deserted island. 
He misses his home in Burbank, but at least now he can spend plenty of time outdoors – 
and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises.


1. Help Eduardo track what day of the week it is. 
Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, 
will console.log a string containing the day of the week for that number (given 1, log "Sunday"). 
Use a SWITCH statement.

2. Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. 
Return weekday as before, given number of days total.
"Sunday" still corresponds to 1.

3. Create a new function someDays() that calls weekDayName2() seventeen times, 
with randomly generated integers as high as 365. Log each result string. 
If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, 
add "Enjoy your day off!"

4. Build function monthName(monthNum) that, 
given a number from 1 to 12, returns a string containing month for that number 
("May" corresponds to 5). Use an array, without loops.

5. Now expand monthName() to create monthToDays(monthNum), 
returning the number of days in that month, in the year 2017. 
Hint: use a SWITCH statement for the days in each month.

6. Despite using his ember expertise to create a glowing SOS visible from space, 
the days go by and sadly Eduardo is still not rescued. Is it spring yet? 
It might as well be. Build on monthName() to create dayToMonth(dayNum). 
If given a day number since the year began, return the current month 
(assume it is not a Leap Year). Given 75, return "March".

7. Eduardo builds a Dojo bootcamp on the island. 
Initially his students only find Ninja Gold in caves, 
but eventually, even his tree sloths can write code quickly! 
Dojo classes meet Monday thru Friday, so let’s reincorporate weekday to our calculations. 
Construct fullDate(dayNum) to accept the number of days so far in 2017, 
and return a full date string. 
He hardly remembers that fateful New Year’s Eve party, 
but he knows it was a Saturday. Given 142, return "Monday, May 22, 2017".

8. Times flies when you’re at a Dojo – months in fact. 
Build fullDate2(dayNum) that will be given a 4-digit integer: 
the days that have passed since December 31, 2016. 
This number can stretch into future years! 
You can assume that any year number divisible by four is a leap year and has a 29- day February. 
Given 8475, return "Thursday, March 15, 2040".

9. Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. 
Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. 
Build fullDate3(dayNum) to handle days up to 140,000! 
Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). 
Given 139947, return "Tuesday, February 29, 2400".
*/

function weekdayName(weekdayNum) {
    switch (weekdayNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }
}

weekdayName(1);

function weekdayName2(dayNum) {
    var weekdayNum = dayNum % 7;
    switch (weekdayNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }
}

weekdayName2(1);

function someDays() {
    for (var i = 0; i < 17; i++) {
        var dayNum = Math.ceil(Math.random() * 365);
        var weekdayNum = dayNum % 7;
        switch (weekdayNum) {
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday");
                break;
        }
    }
}

someDays();