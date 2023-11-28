//zadanie 1
function introduceYourself(){
    let fname = "Imię";
    let lname = "Nazwisko";
    alert("Mam na imię " + fname + ", a moje nazwisko to " + lname + ". A to mój sprawdzian z JavaScript.");
}
//Zadanie 2 A
grades = [4,1,2,3,6]
function finalGrade(grades){
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    sum = sum / grades.length;
    switch(true){
        case (sum <= 1.5):
            alert("ndst");
            break;
        case (sum >= 1.6 && sum <= 2.5):
            alert("dop");
            break;
        case (sum >= 2.6 && sum <= 3.5):
            alert("dost");
            break;
        case (sum >= 3.6 && sum <=4.5):
            alert("db");
            break;
        case (sum >= 4.6 && sum <= 5.5):
            alert("bdb");
            break;
        case (sum >= 5.6):
            alert("cel");
            break;
    }
}
//zadanie 2 B
results = [4,1,2,3,6]
function calculateGrades(results){
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
        sum += results[i];
    }
    sum *= 100;
    sum /= 30;
    percentage = []
    percentage.push(sum);
    alert(percentage);
    switch(true){
        case (sum < 29):
            alert("ndst");
            break;
         case (sum >=30 && sum<=49):
            alert("dop");
            break;
         case (sum >= 50 && sum <=69):
            alert("dst");
            break;
         case (sum >= 70 && sum <=84):
            alert("db");
            break;
         case (sum>=85 && sum<=94):
            alert("bdb");
            break;
        case (sum>95):
            alert("cel");
            break;
    }
}
//zadanie 3 A
function checkRange(a, b){
    let wynik = 0 + ",";
    a = parseInt(prompt("Podaj a: "));
    b = parseInt(prompt("Podaj b: "));
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a; i<b; i++){
        if(i%4==0){
            wynik += i + ",";
        }
        
    }
    alert(wynik);
}
//zadanie 3 B
function myFilter(a, b){
    let wynik = 0 + ",";
    a = parseInt(prompt("Podaj a: "));
    b = parseInt(prompt("Podaj b: "));
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a; i<b; i++){
        if(i%7==0){
            wynik += i + ",";
        }
        
    }
    alert(wynik);
}
//zadanie 4 A
let arr = new Array(6,8,3,1,3,7,8,9,10); //to bedzie podane
function uniqueTest(arr){
    let arr1 = [];
    arr.forEach(element => {
        if(!arr1.includes(element)){
            arr1.push(element);
        }
    });
}
//zadanie 4 B
let arr1 = new Array(6,8,3,1,3,7,8,9); //to 
let arr2 = new Array(6,9,0,3,1,4,6,8);   // i to powinno być podane
function uniqueTest(arr1, arr2){
    arr3 = arr1.concat(arr2);
    let arr4 = []
    arr3.forEach(element => {
        if(!arr4.includes(element)){
            arr4.push(element);
        } 
    });
    arr4.sort();
    alert(arr4);
}