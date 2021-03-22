let students = [];

students[0]=
    {
        firstName : 'Jan',
        lastName : 'Reno',
        age : 26,
        scores : { Js : 62, React : 57, PY : 88, Java : 90}
    }


students.push(
    {
        firstName : 'Klod',
        lastName : 'Mone',
        age : 19,
        scores : { Js : 77, React : 52, PY : 92, Java : 67}
    }
)

students.push(
    {
        firstName : 'Van',
        lastName : 'Goge',
        age : 21,
        scores : { Js : 51, React : 98, PY : 65, Java : 70}
    }
)

students.push(
    {
        firstName : 'Dam',
        lastName : 'Squear',
        age : 36,
        scores : { Js : 82, React : 53, PY : 80, Java : 65}
    }
)

// -----GP---

students[0].GP = {js : null, react :null, py : null, java : null}
students[1].GP = {js : null, react :null, py : null, java : null}

// ##student 2
if(students[1].scores.Js > 91){
    students[1].GP.js = 4
}else if(students[1].scores.Js > 81){
    students[1].GP.js = 3
}else if(students[1].scores.Js > 71) {
    students[1].GP.js = 2
}else if(students[1].scores.Js > 61) {
    students[1].GP.js = 1
}else if(students[1].scores.Js > 51) {
    students[1].GP.js = 0.5
}

if(students[1].scores.Java > 91){
    students[1].GP.java = 4
}else if(students[1].scores.Java > 81){
    students[1].GP.java = 3
}else if(students[1].scores.Java > 71) {
    students[1].GP.java = 2
}else if(students[1].scores.Java > 61) {
    students[1].GP.java = 1
}else if(students[1].scores.Java > 51) {
    students[1].GP.java = 0.5
}

if(students[1].scores.React > 91){
    students[1].GP.react = 4
}else if(students[1].scores.React > 81){
    students[1].GP.react = 3
}else if(students[1].scores.React > 71) {
    students[1].GP.react = 2
}else if(students[1].scores.React > 61) {
    students[1].GP.react = 1
}else if(students[1].scores.React > 51) {
    students[1].GP.react = 0.5
}

if(students[1].scores.PY > 91){
    students[1].GP.py = 4
}else if(students[1].scores.PY > 81){
    students[1].GP.py = 3
}else if(students[1].scores.PY > 71) {
    students[1].GP.py = 2
}else if(students[1].scores.PY > 61) {
    students[1].GP.py = 1
}else if(students[1].scores.PY > 51) {
    students[1].GP.py = 0.5
};

// ## student 1
if(students[0].scores.Js > 91){
    students[0].GP.js = 4
}else if(students[0].scores.Js > 81){
    students[0].GP.js = 3
}else if(students[0].scores.Js > 71) {
    students[0].GP.js = 2
}else if(students[0].scores.Js > 61) {
    students[0].GP.js = 1
}else if(students[0].scores.Js > 51) {
    students[0].GP.js = 0.5
};

if(students[0].scores.Java > 91){
    students[0].GP.java = 4
}else if(students[0].scores.Java > 81){
    students[0].GP.java = 3
}else if(students[0].scores.Java > 71) {
    students[0].GP.java = 2
}else if(students[0].scores.Java > 61) {
    students[0].GP.java = 1
}else if(students[0].scores.Java > 51) {
    students[0].GP.java = 0.5
};

if(students[0].scores.React > 91){
    students[0].GP.react = 4
}else if(students[0].scores.React > 81){
    students[0].GP.react = 3
}else if(students[0].scores.React > 71) {
    students[0].GP.react = 2
}else if(students[0].scores.React > 61) {
    students[0].GP.react = 1
}else if(students[0].scores.React > 51) {
    students[0].GP.react = 0.5
};

if(students[0].scores.PY > 91){
    students[0].GP.py = 4
}else if(students[0].scores.PY > 81){
    students[0].GP.py = 3
}else if(students[0].scores.PY > 71) {
    students[0].GP.py = 2
}else if(students[0].scores.PY > 61) {
    students[0].GP.py = 1
}else if(students[0].scores.PY > 51) {
    students[0].GP.py = 0.5
;}

// #### student 3
students[2].GP = {js : null, react :null, py : null, java : null}

if(students[2].scores.Js > 91){
    students[2].GP.js = 4
}else if(students[2].scores.Js > 81){
    students[2].GP.js = 3
}else if(students[2].scores.Js > 71) {
    students[2].GP.js = 2
}else if(students[2].scores.Js > 61) {
    students[2].GP.js = 1
}else if(students[2].scores.Js >= 51) {
    students[2].GP.js = 0.5
}

if(students[2].scores.Java > 91){
    students[2].GP.java = 4
}else if(students[2].scores.Java > 81){
    students[2].GP.java = 3
}else if(students[2].scores.Java > 71) {
    students[2].GP.java = 2
}else if(students[2].scores.Java > 61) {
    students[2].GP.java = 1
}else if(students[2].scores.Java > 51) {
    students[2].GP.java = 0.5
}

if(students[2].scores.React > 91){
    students[2].GP.react = 4
}else if(students[2].scores.React > 81){
    students[2].GP.react = 3
}else if(students[2].scores.React > 71) {
    students[2].GP.react = 2
}else if(students[2].scores.React > 61) {
    students[2].GP.react = 1
}else if(students[2].scores.React > 51) {
    students[2].GP.react = 0.5
}

if(students[2].scores.PY > 91){
    students[2].GP.py = 4
}else if(students[2].scores.PY > 81){
    students[2].GP.py = 3
}else if(students[2].scores.PY > 71) {
    students[2].GP.py = 2
}else if(students[2].scores.PY > 61) {
    students[2].GP.py = 1
}else if(students[2].scores.PY > 51) {
    students[2].GP.py = 0.5
}

// ### student 4

students[3].GP = {js : null, react :null, py : null, java : null}


if(students[3].scores.Js > 91){
    students[3].GP.js = 4
}else if(students[3].scores.Js > 81){
    students[3].GP.js = 3
}else if(students[3].scores.Js > 71) {
    students[3].GP.js = 2
}else if(students[3].scores.Js > 61) {
    students[3].GP.js = 1
}else  {
    students[3].GP.js = 0.5
}

if(students[3].scores.Java > 91){
    students[3].GP.java = 4
}else if(students[3].scores.Java > 81){
    students[3].GP.java = 3
}else if(students[3].scores.Java > 71) {
    students[3].GP.java = 2
}else if(students[3].scores.Java > 61) {
    students[3].GP.java = 1
}else if(students[3].scores.Java >= 51) {
    students[3].GP.java = 0.5
}

if(students[3].scores.React > 91){
    students[3].GP.react = 4
}else if(students[3].scores.React > 81){
    students[3].GP.react = 3
}else if(students[3].scores.React > 71) {
    students[3].GP.react = 2
}else if(students[3].scores.React > 61) {
    students[3].GP.react = 1
}else if(students[3].scores.React >= 51) {
    students[3].GP.react = 0.5
}

if(students[3].scores.PY > 91){
    students[3].GP.py = 4
}else if(students[3].scores.PY > 81){
    students[3].GP.py = 3
}else if(students[3].scores.PY > 71) {
    students[3].GP.py = 2
}else if(students[3].scores.PY > 61) {
    students[3].GP.py = 1
}else if(students[3].scores.PY > 51) {
    students[3].GP.py = 0.5
}

// #### GPA####
let credits = {
    js: 4,
    react: 7,
    py: 6,
    java: 3
};

students[0].GPA = students[0].GP.js * credits.js + students[0].GP.react * credits.react + students[0].GP.py * credits.py + students[0].GP.java * credits.java
students[1].GPA = students[1].GP.js * credits.js + students[1].GP.react * credits.react + students[1].GP.py * credits.py + students[1].GP.java * credits.java
students[2].GPA = students[2].GP.js * credits.js + students[2].GP.react * credits.react + students[2].GP.py * credits.py + students[2].GP.java * credits.java
students[3].GPA = students[3].GP.js * credits.js + students[3].GP.react * credits.react + students[3].GP.py * credits.py + students[3].GP.java * credits.java



// ### score sum

students[0].ScoreSum = students[0].scores.Js + students[0].scores.React + students[0].scores.PY + students[0].scores.Java
students[1].ScoreSum = students[1].scores.Js + students[1].scores.React + students[1].scores.PY + students[1].scores.Java
students[2].ScoreSum = students[2].scores.Js + students[2].scores.React + students[2].scores.PY + students[2].scores.Java
students[3].ScoreSum = students[3].scores.Js + students[3].scores.React + students[3].scores.PY + students[3].scores.Java

// #####AveragePoint

students[0].averagePoint = (students[0].scores.Js + students[0].scores.React + students[0].scores.PY + students[0].scores.Java) / 4
students[1].averagePoint = (students[1].scores.Js + students[1].scores.React + students[1].scores.PY + students[1].scores.Java) /4
students[2].averagePoint = (students[2].scores.Js + students[2].scores.React + students[2].scores.PY + students[2].scores.Java) / 4
students[3].averagePoint = (students[3].scores.Js + students[3].scores.React + students[3].scores.PY + students[3].scores.Java) / 4

// ### all AveragePoint

let allAveragePoint = (students[0].ScoreSum +  students[1].ScoreSum + students[2].ScoreSum + students[3].ScoreSum) /16

let goodStudents = []
let badStudents =  []

students[0].averagePoint > allAveragePoint ? goodStudents.push( students[0].firstName) : badStudents.push( students[0].firstName)
students[1].averagePoint > allAveragePoint ? goodStudents.push( students[1].firstName) : badStudents.push( students[1].firstName)
students[2].averagePoint > allAveragePoint ? goodStudents.push( students[2].firstName) : badStudents.push( students[2].firstName)
students[3].averagePoint > allAveragePoint ? goodStudents.push( students[3].firstName) : badStudents.push( students[3].firstName)

// #### age 21+

let bestStudent21

students[0].age > 21 && students[0].averagePoint > students[1].averagePoint && students[0].averagePoint > students[2].averagePoint
&& students[0].averagePoint > students[3].averagePoint  ?  bestStudent21 = students[0].firstName : false;

// goodStudents[0] === students[0].firstName && students[0].age > 21 && students[0].averagePoint > students[1].age ?  bestStudent21 = students[0].firstName : false

//---------frontend

let frontEndWinner

students[0].scores.Js + students[0].scores.React > students[1].scores.Js + students[1].scores.React
&& students[0].scores.Js + students[0].scores.React > students[2].scores.Js + students[2].scores.React
&&students[0].scores.Js + students[0].scores.React > students[3].scores.Js + students[3].scores.React
? frontEndWinner = students[0].firstName : false;

students[0].scores.Js + students[0].scores.React < students[1].scores.Js + students[1].scores.React
&& students[1].scores.Js + students[1].scores.React > students[2].scores.Js + students[2].scores.React
&&students[1].scores.Js + students[1].scores.React > students[3].scores.Js + students[3].scores.React
    ? frontEndWinner = students[1].firstName : false;

students[2].scores.Js + students[2].scores.React > students[1].scores.Js + students[1].scores.React
&& students[0].scores.Js + students[0].scores.React < students[2].scores.Js + students[2].scores.React
&&students[2].scores.Js + students[2].scores.React > students[3].scores.Js + students[3].scores.React
    ? frontEndWinner = students[2].firstName : false;

students[3].scores.Js + students[3].scores.React > students[1].scores.Js + students[1].scores.React
&& students[3].scores.Js + students[3].scores.React > students[2].scores.Js + students[2].scores.React
&&students[0].scores.Js + students[0].scores.React < students[3].scores.Js + students[3].scores.React ? frontEndWinner = students[3].firstName : false;

console.log(frontEndWinner)


