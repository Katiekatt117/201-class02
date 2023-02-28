let username = "";
let myname = "";

function whoyou() {
    username = prompt("What is your name?（＾∀＾●）ﾉｼ");
    if (username !== "") {
        alert("Hello " + username);
        document.getElementById("name").innerHTML = "Hello" + "(^・ω・^ )" + username;
    } else {
        alert("(´。＿。｀) Oh ok then");
    }
}
let name = "";

function whome() {
    myname = prompt("Is my name Kat?(❁´◡`❁)");
    if (myname !== "no") {
        alert("Correct!☆*: .｡. o(≧▽≦)o .｡.:*☆" + myname);
        document.getElementById("name").innerHTML = "That's meee" + "(～￣▽￣)～";
    } else {
        alert("O_O Incorrect it's Kat");
    }
}

let dog = ""
function mybaby() {
    dog = prompt("Is my dog's name Lila?(o゜▽゜)o☆");
    if (dog !== "no") {
        alert("Yes! That's my baby!(～￣▽￣)～" + dog);
        document.getElementById("dog").innerHTML = "MY BABY" + "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
    } else {
        alert("(ToT)/~~~ Incorrect her name is Lila");
    }
}
let hobby = "";

function hobbyzz() {
    hobby = prompt("Do I enjoy math? (❤️ ω ❤️)");
    if (hobby !== "yes") {
        alert("I hate it!!(≧﹏ ≦)" + hobby);
        document.getElementById("hobby").innerHTML = "YASSS" + "ヽ(✿ﾟ▽ﾟ)ノ";
    } else {
        alert("(ToT)/~~~ Incorrect I hate it")
    }
}
let area = "";

function areazz() {
    area = prompt("Is Europe my favorite part of the world?(✿◡‿◡)");
    if (area !== "yes") {
        alert("I love Asia!（づ￣3￣）づ╭❤️～" + area);
        document.getElementById("world").innerHTML = "HEHE" + "\^o^/";
    } else {
        alert("O_O Incorrect I love Asia")
    }
}

whoyou()
whome()
mybaby()
hobbyzz()
areazz()

let userAns = "";
let thisArray = [4, 5, 7, 12, "Hello"];

function printItem(thisItem){
    for( let x = 0; x < thisItem.length; x++){
        console.log(thisItem[x]);
    }
}

printItem(thisArray);

function thisFunc(){

    userAns = prompt("Please guess a number between 1 and 10! :)");


    while(userAns != 5){
        if(userAns < 5){
            alert("Your number is too low! Try again!");
            userAns = prompt("Please guess number again!");
        }
        else if(userAns > 5){
            alert("Your number is too high! Try again!");
            userAns = prompt("Please guess number again!");
        }
    }
alert("You guessed right!!!");
}


function promptUser(expectedAnswer) {
    let chancesleft = 4;
    let answeredCorrectly = false;
    while (chancesLeft > 0) {
        const answer = prompt('Please enter your answer:');
        if(answer === null) {
            break;
        }
        else if (answer === expectedAnswer) {
            answeredCorrectly = true;
            break;
        }
        chancesLeft--;
    }
    if(!answeredCorrectly) {
        alert('You are out of chances!');
    }
}

printItem()
promptUser()