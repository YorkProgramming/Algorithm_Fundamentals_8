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

function playFives(num) {
    for (var i = 0; i < num; i++) {
        var roll = rollOne();
        console.log(roll);
        if (roll == 5) {
            console.log("That's good luck!");
        }
    }
}

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

