// Q1 Character is in Uppercase or Lowercase
function UpperLower() {
    var upperlower = document.getElementById('upperlower').value;
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var show = "";
    if (upperlower == '') {
        show = "Please Enter a Character."
    } else {
        if (upperlower.length > 1 || parseInt(upperlower) || upperlower == 0) {
            show = "Please Enter only 1 Character to Check and Not a Number....";
        } else {
            if (upperlower.match(upper)) {
                show = "It is a UpperCase Character";
            } else if (upperlower.match(lower)) {
                show = "It is a LowerCase Character";
            }
        }
    }
    document.getElementById('UpperLowerShow').innerHTML = show;
}
// Q2 Week Day
function WeekDay() {
    var weekday = document.getElementById('weekday').value;
    var date = new Date();
    var weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var show = '';
    if (weekday == '') {
        show = "Please Enter a Number..";
        document.getElementById('WeekDayShow').innerHTML = show;
    } else {
        show = weeks[parseInt(weekday)];
        if (weekday > 6 || weekday < 0) {
            document.getElementById('WeekDayShow').innerHTML = "Enter Between 0-6 ";
            document.getElementById('TodayWeekDayShow').innerHTML = "";
        } else {
            document.getElementById('WeekDayShow').innerHTML = "Day Number you Enter is " + show;
            document.getElementById('TodayWeekDayShow').innerHTML = " and Today is " + weeks[date.getDay()];
        }
    }
}
// Q3 Month Day
function MonthDay() {
    var monthday = document.getElementById('monthday').value;
    var date = new Date();
    var months = ['January 31', 'February 28', 'March 31', 'April 30', 'May 31', 'June 30', 'July 31', 'August 31', 'September 30', 'October 31', 'November 30', 'December 31'];
    var show = '';
    if (monthday == '') {
        show = "Please Enter a Number..";
        document.getElementById('MonthDayShow').innerHTML = show;
    } else {
        show = months[parseInt(monthday)];
        if (monthday > 11 || monthday < 0) {
            document.getElementById('MonthDayShow').innerHTML = "Enter Between 0-11 ";
            document.getElementById('TodayMonthDayShow').innerHTML = "";
        } else {
            document.getElementById('MonthDayShow').innerHTML = "Month Number you Enter is " + show;
            document.getElementById('TodayMonthDayShow').innerHTML = " Days and The Current Month is " + months[date.getMonth()] + " Days.";
        }
    }
}
// Q4 Total Number of Notes
function Notes() {
    var notes = document.getElementById('notes').value;
    var int = parseInt(notes);
    var float = parseFloat(notes);
    var show = "";
    var thousands = parseInt(notes/1000);
    var hundred = (parseInt(notes) - (thousands * 1000));
    var and = hundred - (parseInt(hundred/100)*100);
    var Paisa = notes.slice(notes.indexOf('.')+1, notes.length);
    if (notes == '') {
        show = "Please Enter a Number..."
    } else { 
        if (int == notes) {
            if (notes > 100000 || notes <= 0) {
                show = "Please Enter Amount Between 0.1 to 100000";
            } else if (notes == 100000) {
                show = "Your Amount is " + (thousands/100) + " Hundred Thousands Rupees";
            } else if (notes < 100000 && notes >= 1000 && notes >= 100 && notes >= 10) {
                show = "Your Amount is " + thousands + " Thousands, " + parseInt(hundred/100) + " Hundred and " + and + " Rupees."
            } else if (notes >= 100 && notes >= 10) {
                show = "Your Amount is " + parseInt(hundred/100) + " Hundred and " + and + " Rupees."
            } else if (notes >= 10 || notes >= 1) {
                show = "Your Amount is " + and + " Rupees."
            }
        } else if (float == notes) {
            if (notes > 100000 || notes <= 0.0) {
                show = "Please Enter Amount Between 0.1 to 100000";
            } else if (notes == 100000) {
                show = "Your Amount is " + (thousands/100) + " Hundred Thousands Rupees";
            } else if (notes < 100000 && notes >= 1000 && notes >= 100 && notes >= 10) {
                show = "Your Amount is " + thousands + " Thousands, " + parseInt(hundred/100) + " Hundred and " + and + " Rupees and " + Paisa + " Paisa.";
            } else if (notes >= 100 && notes >= 10) {
                show = "Your Amount is " + parseInt(hundred/100) + " Hundred and " + and + " Rupees and " + Paisa + " Paisa.";
            } else if (notes >= 10 || notes >= 1) {
                show = "Your Amount is " + and + " Rupees and " + Paisa + " Paisa.";
            } else if (notes >= 0) {
                show = "Your Amount is " + and + " Rupees and " + Paisa + " Paisa.";
            }
        }
    }
    
    document.getElementById('NotesShow').innerHTML = show;
}
// Q5 Angles for a Triangle
function Angles() {
    var angles1 = document.getElementById('angles1').value;
    var angles2 = document.getElementById('angles2').value;
    var angles3 = document.getElementById('angles3').value;
    var angle = Number(angles1) + Number(angles2) + Number(angles3);
    var show = "";
    if (angle == 180) {
        show = "Angles is Valid for a Triangle";
    } else if (angles1 == '' && angles2 == '' && angles3 == '') {
        show = "Please Enter All Angles";
    } else {
        show = "Angles is Not Valid Because All Angles must Become 180 in total";
    }
    document.getElementById('AnglesShow').innerHTML = show;
}
// Q6 Sides of a Triangle
function Sides() {
    var sides1 = document.getElementById('sides1').value;
    var sides2 = document.getElementById('sides2').value;
    var sides3 = document.getElementById('sides3').value;
    var show = "";
    if (sides1 !== '' && sides2 !== '' && sides3 !== '') {
        show = "<br>First Side Length is " + sides1 + "<br>Second Side Length is " + sides2 + "<br>Third Side Length is " + sides3;
    } else {
        show = "Please Enter all Sides.";
    }
    document.getElementById('SidesShow').innerHTML = show;
}
// Q7 Equilateral, Isosceles and Scalene Triangle
function Vectors() {
    var vectors1 = document.getElementById('vectors1').value;
    var vectors2 = document.getElementById('vectors2').value;
    var vectors3 = document.getElementById('vectors3').value;
    var vec1 = Number(vectors1);
    var vec2 = Number(vectors2);
    var vec3 = Number(vectors3);
    var show = "";
    if (vectors1 == '' && vectors2 == '' && vectors3 == '') {
        show = "Please Enter All Vectors..";
    } else {
        if (vec1 === vec2 && vec2 === vec3 && vec3 === vec1) {
            show = "It is Equilateral Triangle";
        } else if (vec1 === vec2 || vec2 === vec3 || vec3 === vec1) {
            show = "It is Isosceles Triangle";
        } else if (vec1 !== vec2 && vec2 !== vec3 && vec3 !== vec1) {
            show = "It is Scalene Triangle";
        }
    }
    document.getElementById('VectorsShow').innerHTML = show;
}
// Q8 Roots of a Quadratic Equation
function Roots() {
    var roots1 = document.getElementById('roots1').value;
    var roots2 = document.getElementById('roots2').value;
    var roots3 = document.getElementById('roots3').value;
    var r1 = Number(roots1);
    var r2 = Number(roots2);
    var r3 = Number(roots3);
    var e = Math.pow(r2,2) - 4*r1*r3;
    var x = (-r2/(2*r3));
    var x1 = ((-r2-Math.sqrt(e))/(2*r3));
    var x2 = ((-r2+Math.sqrt(e))/(2*r3));
    var show = "";
    if (roots1 == '' && roots2 == '' && roots3 == '') {
        show = "Please Enter All the Roots..."
    } else {
        if (r1 === 0) {
            show = " First Value Cannot be 0";
        } else {
            if (e < 0) {
                show = "There are no Roots. Because " + e +" < 0";
            } else if (e === 0) {
                show = "There is 1 Roots. Because " + e + " = 0 and The Value of X = " + x;
            } else if (e > 0) {
                show = "There are two Roots. Because " + e +" > 0 and The Value of X1 = " + x1 + ', X2 = ' + x2;
            }
        }
    }
    document.getElementById('RootsShow').innerHTML = show;
}
// Q9 Profit Loss Calculator
function ProfitLoss() {
    var profitloss1 = document.getElementById('profitloss1').value;
    var profitloss2 = document.getElementById('profitloss2').value;
    var profitloss3 = document.getElementById('profitloss3').value;
    var r1 = Number(profitloss1);
    var r2 = Number(profitloss2);
    var r3 = Number(profitloss3);
    var profit = (r1*r2)/100;
    var loss = (r1*r3)/100;
    var show = "";
    if (profitloss1 == '' && profitloss2 == '' && profitloss3 == '') {
        show = "Please Fill All the Fields.";
    } else {
        if (r1 <= 0) {
            show = " Amount Cannot be Less than or Equal to 0";
        } else if (r2 < 0 || r2 > 100) {
            show = "Profit Must be Between 1-100%";
        } else if (r3 < 0 || r3 > 100) {
            show = "Loss Must be Between 1-100%";
        } else {
            show = "Profit is " + profit + " and Loss is " + loss;
        }
    }
    document.getElementById('ProfitLossShow').innerHTML = show;
}
// Q10 Search Of a Character
function SearchChar() {
    var searchchar1 = document.getElementById('searchchar1').value;
    var searchchar2 = document.getElementById('searchchar2').value;
    var show = "";
    if (searchchar1 == '' && searchchar2 == '') {
        show = "Please Fill All the Fields.";
    } else {
        if (searchchar2.length > 1) {
            show = "Character Should be only 1";
        } else if (searchchar1.match(searchchar2)) {
            show = "Character {" + searchchar2 + "} is in the String.";
        } else if (!searchchar1.match(searchchar2)) {
            show = "Character {" + searchchar2 + "} is not in the String.";
        }
    }
    document.getElementById('SearchCharShow').innerHTML = show;
}
// Q11 Count Of a Character
function CountChar() {
    var countchar1 = document.getElementById('countchar1').value;
    var countchar2 = document.getElementById('countchar2').value;
    var show = "";
    if (countchar1 == '' && countchar2 == '') {
        show = "Please Fill All the Fields.";
    } else {
        if (countchar2.length > 1) {
            show = "Character Should be only 1";
        } else if (countchar1.match(countchar2)) {
            var t = '';
            for (let i = 0; i < countchar1.length; i++) {
                if (countchar1[i] == countchar2) {
                    t++;
                }
            }
            show = "Character {" + countchar2 + "} is " + t + " Times in the String";
        } else if (!countchar1.match(countchar2)) {
            show = "Character {" + countchar2 + "} is not in the String.";
        }
    }
    document.getElementById('CountCharShow').innerHTML = show;
}
// Q12 Maximum Frequent Character in a String
function MaxFre() {
    var maxfre = document.getElementById('maxfre').value;
    var ca = maxfre.toLowerCase();
    var output = "";
    var char = [];
    var count = [];
    var maxs = [];
    var indexes = [];
    var show = [];
    var max;
    var element;
    var isit = false;
    if (maxfre == "") {
        output = "Please Enter Something.";
        document.getElementById('MaxFreShow2').innerHTML = output;
    } else {
        // Reading Characters that are in the string atleast one time
        for (let a = 0; a < ca.length; a++) {
            for (let b = 0; b < char.length; b++) {
            if (ca[a] == char[b]) {
                isit = true;
            }
        }
        if (isit == false) {
            char.push(ca[a]);
        }
        isit = false;
        }
        // Count How many times those characters are repeats
        for (let c = 0; c < char.length; c++) {
            var r = 0;
            for (let d = 0; d < ca.length; d++) {
                if (char[c] == ca[d]) {
                    r++
                }
            }
            count.push(r++);
        }
        // All Maximum Number of Character
        max = Math.max(...count);
        for (let e = 0; e < count.length; e++) {
            if (count[e] == max) {
                maxs.push(count[e]);
            }
        }
        // All Maximum Characters Index Position
        element = count.indexOf(max);
        while (element !== -1) {
            indexes.push(element);
            element = count.indexOf(max, element+1);
        }
        // All Maximun Characters
        for (let f = 0; f < indexes.length; f++) {
            show.push(char[indexes[f]]);
        }
        // All Characters and Their Maximum Number
        for (let g = 0; g < show.length; g++) {
            output += '{' + show[g] + " => " + maxs[g] + '}<br>';
        }
        document.getElementById('MaxFreShow1').innerHTML = "Maximum Frequent Character is or Characters are {" + show + "} Which Repeated {" + max + '} Times';
        document.getElementById('MaxFreShow2').innerHTML = output;
    }
}
// Q13 Mimimum Frequent Character in a String
function MinFre() {
    var minfre = document.getElementById('minfre').value;
    var ca = minfre.toLowerCase();
    var output = "";
    var char = [];
    var count = [];
    var mins = [];
    var indexes = [];
    var show = [];
    var element;
    var min;
    var isit = false;
    if (minfre == "") {
        output = "Please Enter Something.";
        document.getElementById('MinFreShow2').innerHTML = output;
    } else {
        // Reading Characters that are in the String atleast 1 time.
        for (let a = 0; a < ca.length; a++) {
            isit = false;
            for (let b = 0; b < char.length; b++) {
                if (ca[a] == char[b]) {
                    isit = true;
                }
            }
            if (isit == false) {
                char.push(ca[a]);
            }
        }
        // Count How many Times those Characters are Repeated
        for (let c = 0; c < char.length; c++) {
            var r = 0;
            for (let d = 0; d < ca.length; d++) {
                if (char[c] == ca[d]) {
                    r++;
                }
            }
            count.push(r);
        }
        // Total Minimum Number of Character
        min = Math.min(...count);
        for (let e = 0; e < count.length; e++) {
            if (count[e] == min) {
                mins.push(min);
            }
        }
        // Minimum Number Indexes
        element = count.indexOf(min);
        while (element !== -1) {
            indexes.push(element);
            element = count.indexOf(min, element+1);
        }
        // Minimum Number Of Character
        for (let f = 0; f < indexes.length; f++) {
            show.push(char[indexes[f]]);
        }
        // All Minimum Characters and Their Numbers
        for (let g = 0; g < show.length; g++) {
            output += '{' + show[g] + ' => ' + mins[g] + '}<br>';
        }
        document.getElementById('MinFreShow1').innerHTML = "Minimun Frequent Character is {" + show + "} which Repeated only {" + min + "} Times."; 
        document.getElementById('MinFreShow2').innerHTML = output; 
    }
}
// Q14 Total Frequent of Each Character in a String
function TotalFre() {
    var totalfre = document.getElementById('totalfre').value;
    var ca = totalfre.toLowerCase();
    var output = '';
    var char = [];
    var count = [];
    var isit = false;
    if (totalfre == "") {
        output = "Please Enter Something.";
        document.getElementById('TotalFreShow').innerHTML = output;
    } else {
    for (let a = 0; a < ca.length; a++) {
        for (let b = 0; b < char.length; b++) {
            if (ca[a] == char[b]) {
                isit = true;
            }
        }
        if (isit == false) {
            char.push(ca[a]);
        }
        isit = false;
    }
    for (let c = 0; c < char.length; c++) {
        var r = 0;
        for (let d = 0; d < ca.length; d++) {
            if (char[c] == ca[d]) {
                r++;
            }
        }
        count.push(r);
    }
    for (let s = 0; s < char.length; s++) {
        output += '<br>{' + char[s] + ' => ' + count[s] + '}';
    }
    document.getElementById('TotalFreShow').innerHTML = "Total Characters: " + output;
    }
}
// Q15 Remove First Character in a String
function RemoveFirst() {
    var removefirst = document.getElementById('removefirst').value;
    var show = '';
    if (removefirst.length > 1) {
        show = removefirst.slice(1,removefirst.length);
    } else {
        show = "Please Enter Atleast 2 Different Character";
    }
    document.getElementById('RemoveFirstShow').innerHTML = show;
}
// Q16 Remove Last Character in a String
function RemoveLast() {
    var removelast = document.getElementById('removelast').value;
    var show = '';
    if (removelast.length > 1) {
        show = removelast.slice(0,removelast.length - 1);
    } else {
        show = "Please Enter Atleast 2 Different Character";
    }
    document.getElementById('RemoveLastShow').innerHTML = show;
}
// Q17 Remove All Character in a String
function RemoveAll() {
    var removeall = document.getElementById('removeall').value;
    var show = '';
    if (removeall.length > 2) {
        var n = parseInt(Math.random() *10);
        show = removeall.replace(removeall[n], '') + " Keep Pressing It will Randomly Remove a Character from String";
    } else {
        show = "Please Enter Atleast 3 Different Character";
    }
    document.getElementById('RemoveAllShow').innerHTML = show;
}
// Q18 Remove All Repeated Character in a String
function RemoveAllRepeat() {
    var removeallrepeat = document.getElementById('removeallrepeat').value;
    var ca = removeallrepeat.toLowerCase();
    var show = "";
    var abc1 = ['a', 'b',  'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, one, two, three, four, five, six, seven, eight, nine, zero;
    a = b =  c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = x = y = z = one = two = three = four = five = six = seven = eight = nine = zero = 0;
    var abc2;
    var num;
    if (removeallrepeat.length > 1) {
        if (ca.match(/a/g)) {
            a = ca.match(/a/g).length;
        }
        if (ca.match(/b/g)) {
            b = ca.match(/b/g).length;
        }
        if (ca.match(/c/g)) {
            c = ca.match(/c/g).length;
        }
        if (ca.match(/d/g)) {
            d = ca.match(/d/g).length;
        }
        if (ca.match(/e/g)) {
            e = ca.match(/e/g).length;
        }
        if (ca.match(/f/g)) {
            f = ca.match(/f/g).length;
        }
        if (ca.match(/g/g)) {
            g = ca.match(/g/g).length;
        }
        if (ca.match(/h/g)) {
            h = ca.match(/h/g).length;
        }
        if (ca.match(/i/g)) {
            g = ca.match(/i/g).length;
        }
        if (ca.match(/j/g)) {
            j = ca.match(/j/g).length;
        }
        if (ca.match(/k/g)) {
            k = ca.match(/k/g).length;
        }
        if (ca.match(/l/g)) {
            l = ca.match(/l/g).length;
        }
        if (ca.match(/m/g)) {
            m = ca.match(/m/g).length;
        }
        if (ca.match(/n/g)) {
            n = ca.match(/n/g).length;
        }
        if (ca.match(/o/g)) {
            o = ca.match(/o/g).length;
        }
        if (ca.match(/p/g)) {
            p = ca.match(/p/g).length;
        }
        if (ca.match(/q/g)) {
            q = ca.match(/q/g).length;
        }
        if (ca.match(/r/g)) {
            r = ca.match(/r/g).length;
        }
        if (ca.match(/s/g)) {
            s = ca.match(/s/g).length;
        }
        if (ca.match(/t/g)) {
            t = ca.match(/t/g).length;
        }
        if (ca.match(/u/g)) {
            u = ca.match(/u/g).length;
        }
        if (ca.match(/v/g)) {
            v = ca.match(/v/g).length;
        }
        if (ca.match(/w/g)) {
            w = ca.match(/w/g).length;
        }
        if (ca.match(/x/g)) {
            x = ca.match(/x/g).length;
        }
        if (ca.match(/y/g)) {
            y = ca.match(/y/g).length;
        }
        if (ca.match(/z/g)) {
            z = ca.match(/z/g).length;
        }
        if (ca.match(/1/g)) {
            one = ca.match(/1/g).length;
        }
        if (ca.match(/2/g)) {
            two = ca.match(/2/g).length;
        }
        if (ca.match(/3/g)) {
            three = ca.match(/3/g).length;
        }
        if (ca.match(/4/g)) {
            four = ca.match(/4/g).length;
        }
        if (ca.match(/5/g)) {
            five = ca.match(/5/g).length;
        }
        if (ca.match(/6/g)) {
            six = ca.match(/6/g).length;
        }
        if (ca.match(/7/g)) {
            seven = ca.match(/7/g).length;
        }
        if (ca.match(/8/g)) {
            eight = ca.match(/8/g).length;
        }
        if (ca.match(/9/g)) {
            nine = ca.match(/9/g).length;
        }
        if (ca.match(/0/g)) {
            zero = ca.match(/0/g).length;
        }
        abc2 = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, one, two, three, four, five, six, seven, eight, nine, zero];
        num = abc2.indexOf(Math.max(...abc2));
        show = ca.replaceAll(abc1[num], '');
    } else {
        show = "Please Enter Atleast 2 Different Character";
    }
    document.getElementById('RemoveAllRepeatShow').innerHTML = show;
}
// Q19 Replace First Occurence of a Character with another in a String
function ReplaceFirst() {
    var replacefirst = document.getElementById('replacefirst').value;
    var show = "";
    if (replacefirst.length > 2) {
        var r1 = replacefirst[0];
        var r0 = replacefirst[1];
        var r2 = replacefirst.slice(2, replacefirst.length);
        show = r0+r1+r2;
    } else {
        show = "Please Enter Atleast 3 Different Character";
    }
    document.getElementById('ReplaceFirstShow').innerHTML = show;
}
// Q20 Replace Last Occurence of a Character with another in a String
function ReplaceLast() {
    var replacelast = document.getElementById('replacelast').value;
    var show = "";
    if (replacelast.length > 2) {
        var l1 = replacelast.length - 1;
        var l2 = replacelast.length - 2;
        var r0 = replacelast.slice(0, l2);
        var r1 = replacelast[l1];
        var r2 = replacelast[l2];
        show = r0+r1+r2;
    } else {
        show = "Please Enter Atleast 3 Different Character";
    }
    document.getElementById('ReplaceLastShow').innerHTML = show;
}
// Q21 Replace All Occurence of a Character with another in a String
function ReplaceAll() {
    var replaceall = document.getElementById('replaceall').value;
    var show = "";
    if (replaceall.length > 2) {
        show = replaceall[replaceall.length - 1] + replaceall.slice(0, replaceall.length - 1);
    } else {
        show = "Please Enter Atleast 3 Different Character";
    }
    document.getElementById('ReplaceAllShow').innerHTML = show;
}
// Q22 Find First Occurence of a Word in a given String
var FirstWordString = "Ahmad Maqsood Baloch";
document.getElementById('FirstWordString').innerHTML = '{' +  FirstWordString + '}';
function FirstWord() {
    var first = FirstWordString.indexOf(' ');
    var show = FirstWordString.slice(0, first);
    document.getElementById('FirstWordShow').innerHTML = show;
}
// Q23 Find Last Occurence of a Word in a given String
var LastWordString = "Ahmad Maqsood Baloch";
document.getElementById('LastWordString').innerHTML = '{' +  LastWordString + '}';
function LastWord() {
    var last = LastWordString.lastIndexOf(' ');
    var show = LastWordString.slice(last, LastWordString.length);
    document.getElementById('LastWordShow').innerHTML = show;
}
// Q24 Search All Occurences of a Word in a given String
var AllWordString = "Ahmad Maqsood Baloch";
document.getElementById('AllWordString').innerHTML = '{' +  AllWordString + '}';
function AllWord() {
    var allword = document.getElementById('allword').value;
    var show = "";
    var sp = "";
    var spl = "";
    if (allword <= 3 && allword >= 1) {
        if (allword == 1) {
            sp = AllWordString.indexOf(' ');
            show = AllWordString.slice(0, sp);            
        } else if (allword == 2) {
            sp = AllWordString.indexOf(' ');
            spl = AllWordString.lastIndexOf(' ');
            show = AllWordString.slice(sp, spl);
        } else if (allword == 3) {
            spl = AllWordString.lastIndexOf(' ');
            show = AllWordString.slice(spl, AllWordString.length);
        } 
    } else {
        show = "Please Enter a Number Between 1 to 3";
    }
    document.getElementById('AllWordShow').innerHTML = show;
}
// Q25 Count All Occurences of a Word in a given String
var CountWordString = "Ahmad Maqsood Baloch";
document.getElementById('CountWordString').innerHTML = '{' +  CountWordString + '}';
function CountWord() {
    var show = CountWordString.match(/ /g).length;
    document.getElementById('CountWordShow').innerHTML = show + 1;
}
// Q26 Remove First Occurence of a Word in a given String
var FirstRemoveString = "Ahmad Maqsood Baloch";
document.getElementById('FirstRemoveString').innerHTML = '{' +  FirstRemoveString + '}';
function FirstRemove() {
    var first = FirstRemoveString.indexOf(' ');
    var fword = FirstRemoveString.slice(0, first);
    var show = FirstRemoveString.replace(fword, '');
    document.getElementById('FirstRemoveShow').innerHTML = show;
}
// Q27 Remove Last Occurence of a Word in a given String
var LastRemoveString = "Ahmad Maqsood Baloch";
document.getElementById('LastRemoveString').innerHTML = '{' +  LastRemoveString + '}';
function LastRemove() {
    var last = LastRemoveString.lastIndexOf(' ');
    var lword = LastRemoveString.slice(last, LastRemoveString.length);
    var show = LastRemoveString.replace(lword, '');
    document.getElementById('LastRemoveShow').innerHTML = show;
}
// Q28 Remove All Occurences of a Word in a given String
var RemoveAllWordString = "Ahmad Maqsood Baloch";
document.getElementById('RemoveAllWordString').innerHTML = '{' +  RemoveAllWordString + '}';
function RemoveAllWord() {
    var removeallword = document.getElementById('removeallword').value;
    var show = "";
    var fword = '';
    var sp = "";
    var spl = "";
    if (removeallword <= 3 && removeallword >= 1) {
        if (removeallword == 1) {
            sp = RemoveAllWordString.indexOf(' ');
            fword = RemoveAllWordString.slice(0, sp);            
            show = RemoveAllWordString.replace(fword, '');            
        } else if (removeallword == 2) {
            sp = RemoveAllWordString.indexOf(' ');
            spl = RemoveAllWordString.lastIndexOf(' ');
            fword = RemoveAllWordString.slice(sp, spl);            
            show = RemoveAllWordString.replace(fword, '');
        } else if (removeallword == 3) {
            spl = RemoveAllWordString.lastIndexOf(' ');
            fword = RemoveAllWordString.slice(spl, RemoveAllWordString.length);            
            show = RemoveAllWordString.replace(fword, '');
        } 
    } else {
        show = "Please Enter a Number Between 1 to 3";
    }
    document.getElementById('RemoveAllWordShow').innerHTML = show;
}
// Q29 Trim Leading White Space Characters from given String
function TrimLeading() {
    var TrimLeadingString =  "          Ahmad   Maqsood  Baloch           ";
    alert('{' + TrimLeadingString + '}' + " Press Again");
    var show = "{" + TrimLeadingString.trimLeft() + "}";
    alert(show);
}
// Q30 Trim Trailing White Space Characters from given String
function TrimTrailing() {
    var TrimTrailingString =  "          Ahmad   Maqsood  Baloch           ";
    alert('{' + TrimTrailingString + '}' + " Press Again");
    var show = "{" + TrimTrailingString.trimRight() + "}";
    alert(show);
}
// Q31 Trim Both White Space Characters from given String
function TrimBoth() {
    var TrimBothString =  "          Ahmad   Maqsood  Baloch           ";
    alert('{' + TrimBothString + '}' + " Press Again");
    var show = "{" + TrimBothString.trim() + "}";
    alert(show);
}
// Q32 Remove All Extra Blank Spaces Characters from given String
function ExtraBlankSpace() {
    var ExtraBlankSpaceString =  "          Ahmad     Maqsood  Baloch           ";
    alert('{' + ExtraBlankSpaceString + '}' + " Press Again");
    var show = "{" + ExtraBlankSpaceString.replace(/          |         |        |       |      |     |    |   |  /g, ' ').trim() + "}";
    alert(show);
}
// Q33 Count Frequency of each Element in an Array
var CountFreString = [];
function CountFre() {
    var countfre = document.getElementById('countfre').value;
    var output = "";
    var show = [];
    var count = [];
    var isit = false;
    if (countfre == '') {
        output = "Please Enter Something";
        document.getElementById('CountFreShow').innerHTML = output;
    } else {
        CountFreString.push(countfre);
        for (let a = 0; a < CountFreString.length; a++) {
            for (let b = 0; b < show.length; b++) {
                if (CountFreString[a] == show[b]) {
                    isit = true;
                }
            }
            if (isit == false) {
                show.push(CountFreString[a]);
            }
            isit = false;
        }
        for (let c = 0; c < show.length; c++) {
            var r = 0;
            for (let d = 0; d < CountFreString.length; d++) {
                if (show[c] == CountFreString[d]) {
                    r++;
                }
            }
            count.push(r);
        }
        for (let f = 0; f < show.length; f++) {
            output += '{' + show[f] + ' => ' + count[f] + '}' + '<br>';
        }
        document.getElementById('CountFreString').innerHTML ='{' + CountFreString + '}';
        document.getElementById('CountFreShow').innerHTML = output;
    }
}
// Q34 Print All Unique Elements in an Array
var UniqueString = [];
function Unique() {
    var unique = document.getElementById('unique').value;
    var show = [];
    var isit = false;
    if (unique == '') {
        var output = "Please Enter Something";
        document.getElementById('UniqueShow').innerHTML = output;
    } else {
        UniqueString.push(unique);
        for (let x = 0; x < UniqueString.length; x++) { 
            for (let y = 0; y < show.length; y++) { 
                if ( UniqueString[x] == show[y] ) { 
                    isit = true; 
                } 
            } 
            if (isit == false) { 
                show.push(UniqueString[x]); 
            } 
            isit = false; 
        } 
        document.getElementById('UniqueString').innerHTML = '{' + UniqueString + '}';
        document.getElementById('UniqueShow').innerHTML = '{' + show + '}';
    }
}
// Q35 Count All Duplicate Elements in an Array
var DuplicateString = [];
function Duplicate() {
    var duplicate = document.getElementById('duplicate').value;
    var show = [];
    var count = [];
    var isit = false;
    var s = 0;
    if (duplicate == '') {
        var output = "Please Enter Something";
        document.getElementById('DuplicateShow').innerHTML = output;
    } else {
        DuplicateString.push(duplicate);
        for (let a = 0; a < DuplicateString.length; a++) { 
            for (let b = 0; b < show.length; b++) { 
                if ( DuplicateString[a] == show[b] ) { 
                    isit = true; 
                } 
            } 
            if (isit == false) { 
                show.push(DuplicateString[a]); 
            } 
            isit = false; 
        } 
        for (let c = 0; c < show.length; c++) { 
            var r = 0;
            for (let d = 0; d < DuplicateString.length; d++) { 
                if (show[c] == DuplicateString[d]) { 
                    r++; 
                } 
            } 
            count.push(r);
        } 
        for (let f = 0; f < count.length; f++) {
            if (count[f] >= 2) {
                s++;
            }
        }
        document.getElementById('DuplicateString').innerHTML = '{' + DuplicateString + '}';
        document.getElementById('DuplicateShow').innerHTML = 'Total Duplicates are {' + s + '}';
    }
}
// Q36 Delete All Duplicate Elements in an Array
var DeleteDuplicateString = [];
function DeleteDuplicate() {
    var deleteduplicate = document.getElementById('deleteduplicate').value;
    var show = [];
    var count = [];
    var isit = false;
    var single = [];
    if (deleteduplicate == '') {
        var output = "Please Enter Something";
        document.getElementById('DeleteDuplicateShow').innerHTML = output;
    } else {
        DeleteDuplicateString.push(deleteduplicate);
        for (let a = 0; a < DeleteDuplicateString.length; a++) { 
            for (let b = 0; b < show.length; b++) { 
                if ( DeleteDuplicateString[a] == show[b] ) { 
                    isit = true; 
                } 
            } 
            if (isit == false) { 
                show.push(DeleteDuplicateString[a]); 
            } 
            isit = false; 
        } 
        for (let c = 0; c < show.length; c++) { 
            var r = 0;
            for (let d = 0; d < DeleteDuplicateString.length; d++) { 
                if (show[c] == DeleteDuplicateString[d]) { 
                    r++; 
                } 
            } 
            count.push(r);
        } 
        for (let f = 0; f < count.length; f++) {
            if (count[f] == 1) {
                single.push(show[f]);
            }
            
        }
        document.getElementById('DeleteDuplicateString').innerHTML = '{' + DeleteDuplicateString + '}';
        document.getElementById('DeleteDuplicateShow').innerHTML = '{' + single + '}';
    }
}
// Q37 Merge 2 Arrays to 3rd Array
var MergeArray1String = [];
function MergeArray1() {
    var mergeArray1 = document.getElementById('mergeArray1').value;
    if (mergeArray1 == '') {
        var output = "Please Enter Something";
        document.getElementById('MergeArray1String').innerHTML = output;
    } else{
        MergeArray1String.push(mergeArray1);
        document.getElementById('MergeArray1String').innerHTML = '1st Array: {' + MergeArray1String + '}';
    }
}
var MergeArray2String = [];
function MergeArray2() {
    var mergeArray2 = document.getElementById('mergeArray2').value;
    if (mergeArray2 == '') {
        var output = "Please Enter Something";
        document.getElementById('MergeArray2String').innerHTML = output;
    } else{
        MergeArray2String.push(mergeArray2);
        document.getElementById('MergeArray2String').innerHTML = '2nd Array: {' + MergeArray2String + '}';
    }
}
function Merge() {
    var MergeArrayShow = [];
    MergeArrayShow.push(MergeArray1String);
    MergeArrayShow.push(MergeArray2String);
    document.getElementById('MergeArrayShow').innerHTML = '3rd Array: {' + MergeArrayShow + '}';
}
// Q38 Reverse of An Array
var ReverseArrayString = [];
var ReverseArrayShow = [];
function ReverseArray() {
    var reverseArray = document.getElementById('reverseArray').value;
    if (reverseArray == '') {
        var output = "Please Enter Something";
        document.getElementById('ReverseArrayString').innerHTML = output;
    } else {
        ReverseArrayString.push(reverseArray);
        ReverseArrayShow.push(reverseArray);
        ReverseArrayShow.reverse();
        document.getElementById('ReverseArrayString').innerHTML = 'Array: {' + ReverseArrayString + '}';
        document.getElementById('ReverseArrayShow').innerHTML = 'Reverse Array: {' + ReverseArrayShow + '}';
    }
}
// Q39 Even and Odd Elements in Seperate Arrays
var EvenOddString = [];
function EvenOdd() {
    var evenOdd = document.getElementById('evenOdd').value;
    var EvenOddShow1 = [];
    var EvenOddShow2 = [];
    if (evenOdd == '') {
        var output = "Please Enter Something";
        document.getElementById('EvenOddString').innerHTML = output;
    } else {
        EvenOddString.push(evenOdd);
        for (let x = 0; x < EvenOddString.length; x++) {
            if (EvenOddString[x] % 2 == 0) {
                EvenOddShow1.push(EvenOddString[x]);
            } else {
                EvenOddShow2.push(EvenOddString[x]);
            }
        }
        document.getElementById('EvenOddString').innerHTML = 'Array: {' + EvenOddString + '}';
        document.getElementById('EvenOddShow1').innerHTML = 'Even Array: {' + EvenOddShow1 + '}';
        document.getElementById('EvenOddShow2').innerHTML = 'Odd Array: {' + EvenOddShow2 + '}';
    }
}
// Q40 Search an Eements in an Array
var SearchString = ['as', 'awe', 't', 'yi', 'a', 'r', 'q', 34, 56, 0 , 87];
document.getElementById('SearchString').innerHTML = 'Array: {' + SearchString + '}';
function Search() {
    var search = document.getElementById('search').value;
    var SearchShow = 'No, {' + search + '} is Not in the Array';
    if (search !== "") {
        for (let x = 0; x < SearchString.length; x++) {
            if (SearchString[x] == search) {
                SearchShow = "Yes, {" + search + "} is in the Array on Position Number " + (x+1);
            }
        }
    } else {
        SearchShow = "Please Enter Something..."
    }
    document.getElementById('SearchShow').innerHTML = SearchShow;
}
// Q41 Sort Array Elements in Ascending or Descending Order
var ArrayString = ['as', 'awe', 't', 'yi', 'a', 'r', 'q', 34, 56, 0 , 87];
document.getElementById('ArrayString').innerHTML = "Array: {" + ArrayString + '}';
function AscendingArray() {
    ArrayString.sort();
    document.getElementById('AscendingArrayShow').innerHTML = "Ascending Order Array: {" + ArrayString + '}';
}
function DescendingArray() {
    ArrayString.sort();
    document.getElementById('DescendingArrayShow').innerHTML = "Descending Order Array: {" + ArrayString.reverse() + '}';
}
// Q42 Sort Even and Odd Elements of Array Separately
var NumberString = [2,-3, -5,1,12,53,9,-54,-234,-2,23,34,56,0 ,87];
document.getElementById('NumberString').innerHTML = "Numbers Array: {" + NumberString + '}';
function EvenArray() {
    var output = [];
    for (let a = 0; a < NumberString.length; a++) {
        if (NumberString[a] % 2 == 0) {
            output.push(NumberString[a]);
        }
    }
    document.getElementById('EvenArrayShow').innerHTML = "Even Array: {" + output.sort() + '}';
}
function OddArray() {
    var output = [12, 8];
    for (let a = 0; a < NumberString.length; a++) {
        if (NumberString[a] % 2 == 1) {
            output.push(NumberString[a]);
        }
    }
    document.getElementById('OddArrayShow').innerHTML = "Odd Array: {" + output.sort() + '}';
}
// Q43 Left Rotate an Array
var LeftRotateArrayString = [1,2,3,4,5];
document.getElementById('LeftRotateArrayString').innerHTML = 'Array: {' + LeftRotateArrayString + '}';
function LeftRotateArray() {
    LeftRotateArrayString.push(LeftRotateArrayString[0]);
    LeftRotateArrayString.shift();
    document.getElementById('LeftRotateArrayShow').innerHTML = "Left Rotation Array {" + LeftRotateArrayString + '}';
}
// Q44 Right Rotate an Array
var RightRotateArrayString = [1,2,3,4,5];
document.getElementById('RightRotateArrayString').innerHTML = 'Array: {' + RightRotateArrayString + '}';
function RightRotateArray() {
    RightRotateArrayString.unshift(RightRotateArrayString[RightRotateArrayString.length-1]);
    RightRotateArrayString.pop();
    document.getElementById('RightRotateArrayShow').innerHTML = "Right Rotation Array {" + RightRotateArrayString + '}';
}
// Q45 Sum of All Natural Numbers Between 1 to N
function NaturalNumbers() {
    var naturalnumber = document.getElementById('naturalnumber').value;
    var sum = 0;
    var output = '';
    if (naturalnumber == '') {
        output = "Please Enter Something";
    } else {
        if (naturalnumber >= 1) {
            for (let n = 1; n <= naturalnumber; n++) {
                sum += n;
                output = sum;
            }
        } else {
            output = "Nth Number Should Not be Less than 1 (N < 1)";
        }
    }
    document.getElementById('NaturalNumbersShow').innerHTML = output;
}
// Q46 Sum of All Even Natural Numbers Between 1 to N
function EvenNaturalNumbers() {
    var evennaturalnumber = document.getElementById('evennaturalnumber').value;
    var sum = 0;
    var output = '';
    if (evennaturalnumber == '') {
        output = "Please Enter Something";
    } else {
        if (evennaturalnumber >= 1) {
            for (let n = 1; n <= evennaturalnumber; n++) {
                if (n % 2 == 0) {
                    sum += n;
                    output = sum;
                }
            }
        } else {
            output = "Nth Number Should Not be Less than 1 (N < 1)";
        }
    }
    document.getElementById('EvenNaturalNumbersShow').innerHTML = output;
}
// Q47 Sum of All Odd Natural Numbers Between 1 to N
function OddNaturalNumbers() {
    var oddnaturalnumber = document.getElementById('oddnaturalnumber').value;
    var sum = 0;
    var output = '';
    if (oddnaturalnumber == '') {
        output = "Please Enter Something";
    } else {
        if (oddnaturalnumber >= 1) {
            for (let n = 1; n <= oddnaturalnumber; n++) {
                if (n % 2 == 1) {
                    sum += n;
                    output = sum;
                }
            }
        } else {
            output = "Nth Number Should Not be Less than 1 (N < 1)";
        }
    }
    document.getElementById('OddNaturalNumbersShow').innerHTML = output;
}
// Q48 Print Multiplication Table of any Number
function Tables() {
    var table = document.getElementById('table').value;
    var output = "";
    if (table == '') {
        output = "Please Enter Something";
    } else {
        if (table >= 1) {
            for (let n = 1; n <= 10; n++) {
                output += '<br>' + table + ' X ' + n + ' = ' + (table*n);
            }
        } else {
            output = "Number Should Not be Less than 1 (N < 1)";
        }
    }
    document.getElementById('TablesShow').innerHTML = output;
}
// Q49 Count Number of Digits in a Number
function Digits() {
    var digit = document.getElementById('digit').value;
    var show = '';
    var int = parseInt(digit);
    var float = parseFloat(digit);
    if (digit > 0) {
        if (int == digit) {
            show = "Total Digits in " + digit + " are " + digit.length;
        } else if (float == digit) {
            show = "Total Digits in " + digit + " are " + (digit.length-1);
        }
    } else {
        show = "Please Enter Something...";
    }
    document.getElementById('DigitsShow').innerHTML = show;
}
// Q50 Find First and Last Digit of a Number
function FirstandLastDigits() {
    var firstandlastdigit = document.getElementById('firstandlastdigit').value;
    var show = '';
    var int = parseInt(firstandlastdigit);
    var float = parseFloat(firstandlastdigit);
    var first = firstandlastdigit[0];
    var beforepoint = firstandlastdigit[firstandlastdigit.indexOf('.') - 1];
    var afterpoint = firstandlastdigit[firstandlastdigit.indexOf('.') + 1];
    var last = firstandlastdigit[firstandlastdigit.length - 1];
    if (firstandlastdigit.length > 2 && firstandlastdigit > 2) {
        if (int == firstandlastdigit) {
            show = "First Digit is " + first + " and Last Digit is " + last;
        } else if (float == firstandlastdigit) {
            show = "First Digit is {" + first + "} Digit Before Point is {" + beforepoint + "} Digit After Point is {" + afterpoint + "} and Last Digit is {" + last + '}';
        }
    } else {
        show = "Please Enter Atleast 3 Positive Numbers or Digits...";
    }
    document.getElementById('FirstandLastDigitsShow').innerHTML = show;
}
// Q51 Find Sum of First and Last Digit of a Number
function SumofFirstandLastDigits() {
    var sumoffirstandlastdigit = document.getElementById('sumoffirstandlastdigit').value;
    var show = '';
    var int = parseInt(sumoffirstandlastdigit);
    var float = parseFloat(sumoffirstandlastdigit);
    var first = sumoffirstandlastdigit[0];
    var last = sumoffirstandlastdigit[sumoffirstandlastdigit.length - 1];
    var firstlast = parseInt(first) + parseInt(last);
    if (sumoffirstandlastdigit.length > 2 && sumoffirstandlastdigit > 2) {
        if (int == sumoffirstandlastdigit) {
            show = "First Digit is {" + first + "} and Last Digit is {" + last + "} => Their Sum is {" + firstlast + '}';
        } else if (float == sumoffirstandlastdigit) {
            show = "First Digit is {" + first + "} and Last Digit is {" + last + "} => Their Sum is {" + firstlast + '}';
        }
    } else {
        show = "Please Enter Atleast 3 Positive Numbers or Digits...";
    }
    document.getElementById('SumofFirstandLastDigitsShow').innerHTML = show;
}
// Q52 Swap First and Last Digits of a Number
function SwapFirstandLastDigits() {
    var swapfirstandlastdigit = document.getElementById('swapfirstandlastdigit').value;
    var show = '';
    var int = parseInt(swapfirstandlastdigit);
    var float = parseFloat(swapfirstandlastdigit);
    var first = swapfirstandlastdigit[0];
    var last = swapfirstandlastdigit[swapfirstandlastdigit.length - 1];
    var swapfirstlast = last + swapfirstandlastdigit.slice(1, swapfirstandlastdigit.length - 1) + first;
    if (swapfirstandlastdigit.length > 2 && swapfirstandlastdigit > 2) {
        if (int == swapfirstandlastdigit) {
            show = "First Digit is {" + first + "} and Last Digit is {" + last + "} => After Swapping {" + swapfirstlast + '}';
        } else if (float == swapfirstandlastdigit) {
            show = "First Digit is {" + first + "} and Last Digit is {" + last + "} => After Swapping {" + swapfirstlast + '}';
        }
    } else {
        show = "Please Enter Atleast 3 Positive Numbers or Digits...";
    }
    document.getElementById('SwapFirstandLastDigitsShow').innerHTML = show;
}
// Q53 Calculate Sum of Digits of a Number
function SumOfDigits() {
    var sumofdigit = document.getElementById('sumofdigit').value;
    var show = '';
    var int = parseInt(sumofdigit);
    var float = parseFloat(sumofdigit);
    var sumofbeforepoint = sumofdigit.slice(0, sumofdigit.indexOf('.')); 
    var sumofafterpoint = sumofdigit.slice(sumofdigit.indexOf('.')+1, sumofdigit.length); 
    if (sumofdigit.length >= 2 && sumofdigit >= 2) {
        if (int == sumofdigit) {
            var intsum = 0;
            for (let i = 0; i < sumofdigit.length; i++) {
                intsum += parseInt(sumofdigit[i]);
            }
            show = "Sum of Digits {" + intsum + '}';
        } else if (float == sumofdigit) {
            var intsum = 0;
            var floatsum = 0;
            for (let b = 0; b < sumofbeforepoint.length; b++) {
                intsum += parseInt(sumofbeforepoint[b]);
            }
            for (let a = 0; a < sumofafterpoint.length; a++) {
                floatsum += parseInt(sumofafterpoint[a]);
            }
            show = "<br>Sum of Digits Before the Point {" + intsum + '}<br>Sum of Digits After the Point {' + floatsum + '}<br>Result of Summing with the Point {' + intsum + '.' + floatsum + '}<br>Result of Summing without the Point {' + (intsum + floatsum) + '}';
        }
    } else {
        show = "Please Enter Atleast 2 Positive Numbers or Digits...";
    }
    document.getElementById('SumOfDigitsShow').innerHTML = show;
}
// Q53 Calculate Multiply of Digits of a Number
function MultiplyOfDigits() {
    var Multiplyofdigit = document.getElementById('Multiplyofdigit').value;
    var show = '';
    var int = parseInt(Multiplyofdigit);
    var float = parseFloat(Multiplyofdigit);
    var Multiplyofbeforepoint = Multiplyofdigit.slice(0, Multiplyofdigit.indexOf('.')); 
    var Multiplyofafterpoint = Multiplyofdigit.slice(Multiplyofdigit.indexOf('.')+1, Multiplyofdigit.length); 
    if (Multiplyofdigit.length >= 2 && Multiplyofdigit >= 2) {
        if (int == Multiplyofdigit) {
            var intMultiply = 1;
            for (let i = 0; i < Multiplyofdigit.length; i++) {
                intMultiply *= parseInt(Multiplyofdigit[i]);
            }
            show = "Multiply of Digits {" + intMultiply + '}';
        } else if (float == Multiplyofdigit) {
            var intMultiply = 1;
            var floatMultiply = 1;
            for (let b = 0; b < Multiplyofbeforepoint.length; b++) {
                intMultiply *= parseInt(Multiplyofbeforepoint[b]);
            }
            for (let a = 0; a < Multiplyofafterpoint.length; a++) {
                floatMultiply *= parseInt(Multiplyofafterpoint[a]);
            }
            show = "<br>Multiply of Digits Before the Point {" + intMultiply + '}<br>Multiply of Digits After the Point {' + floatMultiply + '}<br>Result of Multiplyming with the Point {' + intMultiply + '.' + floatMultiply + '}<br>Result of Multiplyming without the Point {' + (intMultiply * floatMultiply) + '}';
        }
    } else {
        show = "Please Enter Atleast 2 Positive Numbers or Digits...";
    }
    document.getElementById('MultiplyOfDigitsShow').innerHTML = show;
}