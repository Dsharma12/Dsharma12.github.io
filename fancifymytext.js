function myFunction() {
    document.getElementById("text area").style.fontSize="24pt";
    alert("I am an alert box!");
}

function myFunction1() {
    document.getElementById("text area").style.fontSize="16pt";
    var x = document.getElementById("text area");
    x.value = x.value.toUpperCase();

    x.style.fontWeight="bold";
    x.style.color="blue";
    x.style.textDecoration="underline"
    alert("Fancified Text");
}

function myFunction2() {
    document.getElementById("text area").style.fontSize="10pt";
    var y = document.getElementById("text area");
    y.value = y.value.toLowerCase();

    y.style.fontWeight="normal";
    y.style.color="black";
    y.style.textDecoration="none"
    alert("Boring Text");
}

function moo() {
    var z = document.getElementById("text area");
    z.value = z.value.toUpperCase();

    let str = z.value.split(".");
    let str2 = str.join("-Moo");
    z.value = str2;

    let str3 = z.value.split(" ") // ["How", "are", "you?"]
    let str4 = str3.join("_"); // "How_are_you?
    z.value = str4;
}