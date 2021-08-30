const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
const fullName2 = `${firstName} ${20+50+30} is a good boy.`;//caret sign ``
//template string a variable deoya
//er vitore $ diye variable neoya jay
//arithmetic calculatin kora jay


//ager system
const multiLine = "I love you\n"
    + "I miss you\n"
    + "I need you";

    //es6 caret
const multiLine2 = `I love you
I miss you
no. I don't need you
Baily road e dorkar nai.`//\n deoya lage na.enter dilei new line niye ney

console.log(multiLine2);


//new
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);
