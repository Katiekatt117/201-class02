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